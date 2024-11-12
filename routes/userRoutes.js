import express from "express";
const router = express.Router();
import { authUser } from "../controller/userController.js";


router.route("/auth").post(authUser);


export default router;
