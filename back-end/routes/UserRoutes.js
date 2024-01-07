import express from "express";
import { getAllUsers } from "../controller/UserController.js";

const router = express.Router();

router.get("/alluser", getAllUsers);

export default router;
