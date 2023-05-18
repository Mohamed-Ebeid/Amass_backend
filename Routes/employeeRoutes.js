import express from "express";
import {
   addEmp,
   signIn,
   allEmp,
   depEmp,
   singleEmp,
   singleEmpAdmin,
} from "../Controllers/employeeController.js";
import { isAuth, isAdmin } from "../utils.js";

const employeeRouter = express.Router();

//api courses
employeeRouter.post("/", isAuth, isAdmin, addEmp); //Add an employee
employeeRouter.post("/sign", signIn); //Sign in an employee
employeeRouter.get("/", isAuth, isAdmin, allEmp); //Getting all employee
employeeRouter.get("/depemp", isAuth, isAdmin, depEmp); //Getting all employees pf dep
employeeRouter.get("/single", isAuth, singleEmp); //Getting a single employee
employeeRouter.get("/single-admin/:id", isAuth, isAdmin, singleEmpAdmin); //Getting a single employee for the admin

export default employeeRouter;
