import express from "express";
import {
	apply,
	accept,
	deny,
	getLeave,
} from "../Controllers/leaveController.js";
import { isAuth, isAdmin } from "../utils.js";

const jobRouter = express.Router();

//api courses
jobRouter.get("/", isAuth, getLeave);
jobRouter.post("/apply", isAuth, apply); //Apply for a leave
jobRouter.put("/accept", isAuth, isAdmin, accept); //Accept a leave
jobRouter.put("/deny", isAuth, isAdmin, deny); //Accept a leave

export default jobRouter;
