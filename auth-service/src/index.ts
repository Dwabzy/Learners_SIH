import bodyParser from "body-parser";
import compression from "compression"; // compresses requests
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import "reflect-metadata";
import { useContainer, useExpressServer } from "routing-controllers";
import { Container } from "typedi";
import winston from "winston";
import { AppDataSource } from "./data-source";

const env = process.env.NODE_ENV;
// Load configuration file.
dotenv.config({ path: `src/config/${env}.env` });

useContainer(Container);

const isProd = env === "prod";

/**
 * Express configuration.
 */
const app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

/**
 * Morgan logging Config
 */
// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
  skip: (_, res) => isProd ? res.statusCode < 400 : false
}))

/**
 * Winston Config
 */
winston.transports.Console.level = (isProd ? "warn" : "debug");

/**
 * Create Express server.
 */
useExpressServer(app, {
  controllers: [
    __dirname + "/controllers/*.ts",
    __dirname + "/controllers/*.js"
  ],
  validation: false
});

/**
 * Initialise DB connection
 */
AppDataSource.initialize();

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log("App is running at http://localhost:%d", app.get("port"));
  console.log("Build Environment (NODE_ENV): ", process.env.NODE_ENV);
});

module.exports = app;