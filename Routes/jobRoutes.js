import express from "express";
import {
	addJob,
	updateJob,
	getJobReport,
	deleteJob,
} from "../Controllers/jobController.js";
import { isAuth, isAdmin } from "../utils.js";

const jobRouter = express.Router();

//api courses
jobRouter.post("/", isAuth, isAdmin, addJob); //Add a job title
jobRouter.put("/edit/:jobId", isAuth, isAdmin, updateJob); //update a job title
jobRouter.get("/all", isAuth, isAdmin, getJobReport); //
jobRouter.delete("/delete/:id", isAuth, isAdmin, deleteJob);

export default jobRouter;
