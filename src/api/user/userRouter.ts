import { Router } from "express";
import { caller } from "./userController";

const router = Router();

router.get('/', function (req, res) {
    caller();
    res.send('Hello World!');
});

export const userRouter = router;
