import express from "express";
import {
   addDep,
   allDep,
   updateDep,
   deleteDep,
   getDep,
} from "../Controllers/departmentController.js";
import { isAuth, isAdmin } from "../utils.js";

const departmentRouter = express.Router();

//api courses
departmentRouter.post("/", isAuth, isAdmin, addDep); //Add an department
departmentRouter.get("/", isAuth, isAdmin, allDep); //Get all department
departmentRouter.get("/single/:id", isAuth, isAdmin, getDep); //single
departmentRouter.put("/edit/:departmentId", isAuth, isAdmin, updateDep);
departmentRouter.delete("/:id", isAuth, isAdmin, deleteDep); //Delete dep

export default departmentRouter;
