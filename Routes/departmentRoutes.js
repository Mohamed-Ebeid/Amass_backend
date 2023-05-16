import express from "express";
import {
   addDep,
   allDep,
   updateDep,
} from "../Controllers/departmentController.js";
import { isAuth, isAdmin } from "../utils.js";

const departmentRouter = express.Router();

//api courses
departmentRouter.post("/", isAuth, isAdmin, addDep); //Add an department
departmentRouter.get("/", isAuth, isAdmin, allDep); //Get all department
departmentRouter.put("/edit/:departmentId", isAuth, isAdmin, updateDep); //update dep

export default departmentRouter;
