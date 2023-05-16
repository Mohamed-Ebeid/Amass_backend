import express from "express";
import {
   addEmp,
   signIn,
   allEmp,
   depEmp,
} from "../Controllers/employeeController.js";
import { isAuth, isAdmin } from "../utils.js";

const employeeRouter = express.Router();

//api courses
employeeRouter.post("/", addEmp); //Add an employee
employeeRouter.post("/sign", signIn); //Sign in an employee
employeeRouter.get("/", isAuth, isAdmin, allEmp);
employeeRouter.get("/depemp", depEmp); //Getting all employees pf dep

export default employeeRouter;
