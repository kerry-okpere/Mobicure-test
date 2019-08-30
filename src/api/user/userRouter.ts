import { Router } from "express";
import { UserController } from "./userController";

const usercontroller = new UserController();
const router = Router();

router.post('/', function (req, res) {
    usercontroller.createUser(req.body, res);
});
router.delete('/:firstName', function (req, res) {
    usercontroller.deleteUser(req.params.firstName, res);
});


export const userRouter = router;
