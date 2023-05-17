import express from "express";
import {
   addEmp,
   signIn,
   allEmp,
   depEmp,
   singleEmp,
} from "../Controllers/employeeController.js";
import { isAuth, isAdmin } from "../utils.js";

const employeeRouter = express.Router();

//api courses
employeeRouter.post("/", addEmp); //Add an employee
employeeRouter.post("/sign", signIn); //Sign in an employee
employeeRouter.get("/", isAuth, isAdmin, allEmp); //Getting all employee
employeeRouter.get("/depemp", isAuth, isAdmin, depEmp); //Getting all employees pf dep
employeeRouter.get("/single", isAuth, singleEmp); //Getting a single employee

export default employeeRouter;
