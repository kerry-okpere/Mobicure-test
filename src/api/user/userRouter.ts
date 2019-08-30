import { Router } from "express";
import { UserController } from "./userController";

const usercontroller = new UserController();
const router = Router();

router.get('/:firstName', function (req, res) {
    usercontroller.getUser(req.body, res);
});

router.post('/', function (req, res) {
    usercontroller.createUser(req.body, res);
});

router.delete('/:firstName', function (req, res) {
    usercontroller.deleteUser(req.params.firstName, res);
});

router.put('/:firstName', function (req, res) {
    usercontroller.updateUser(req.params.firstName, req.body, res);
});


export const userRouter = router;
