import express from "express";
import {
  startDuty,
  endDuty,
 } from "../Controllers/dutyController.js";
 import {isAuth, isAdmin} from '../utils.js';

const dutyRouter = express.Router();

//api courses
dutyRouter.post("/start", isAuth, startDuty); //Start the timer
dutyRouter.put("/end", isAuth, endDuty);   //Stop the timer



export default dutyRouter;