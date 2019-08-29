import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { userRouter } from "./api/user/index"

class App {
    public express = express();

    constructor() {
        this.boot();
    }

    mountRoutes () {
        this.express.use("/", userRouter);
    }
    boot() {

        this.useMiddlewares()
        this.mountRoutes()
        // this.startDB();
    }
    useMiddlewares() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(morgan("tiny"))
    }
}

export default new App().express;
