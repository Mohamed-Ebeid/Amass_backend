import express from "express";
import {
   addEmp,
   signIn,
   allEmp
 } from "../Controllers/employeeController.js";
 import {isAuth, isAdmin} from '../utils.js';

const employeeRouter = express.Router();

//api courses
employeeRouter.post("/", addEmp); //Add an employee
employeeRouter.post("/sign", signIn); //Sign in an employee
employeeRouter.get("/", isAuth, isAdmin, allEmp); //Getting all employees



export default employeeRouter;