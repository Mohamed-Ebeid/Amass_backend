import express from "express";
import { addJob, updateJob } from "../Controllers/jobController.js";
import { isAuth, isAdmin } from "../utils.js";

const jobRouter = express.Router();

//api courses
jobRouter.post("/", isAuth, isAdmin, addJob); //Add a job title
jobRouter.put("/edit/:jobId", isAuth, isAdmin, updateJob); //update a job title

export default jobRouter;
