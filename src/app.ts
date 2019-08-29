import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { userRouter } from "./api/user/index"
import { connection } from "./shared/db";

class App {
    public express = express();

    constructor() {
        this.boot();
    }
    startDB() {
       connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });
    }
    mountRoutes () {
        this.express.use("/", userRouter);
    }
    boot() {

        this.useMiddlewares()
        this.mountRoutes()
        this.startDB();
    }
    useMiddlewares() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(morgan("tiny"))
    }
}

export default new App().express;
