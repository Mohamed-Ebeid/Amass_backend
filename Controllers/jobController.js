import Job_Title from "../Models/job.js";
import Employee from "../Models/employee.js";
import Department from "../Models/department.js";

//Get all job title
export const getJobReport = async (req, res) => {
	res.send(
		await Job_Title.aggregate([
			{
				$lookup: {
					from: "employees",
					localField: "emp_id",
					foreignField: "_id",
					as: "emp",
				},
			},

			{ $project: { "emp.emp_pass": 0 } },
			{
				$lookup: {
					from: "departments",
					localField: "department",
					foreignField: "_id",
					as: "dep",
				},
			},
		])
	);
};

//Add a job title
export const addJob = async (req, res) => {
	try {
		const job = await new Job_Title({
			title: req.body.title,
			department: req.body.department,
			emp_id: req.body.emp_id,
		}).save();
		res.send(job);
	} catch (e) {
		return res.status(400).send("Error => " + e.message);
	}
};

//Updating a job title
export const updateJob = async (req, res) => {
	try {
		const job = await Job_Title.findById(req.params.jobId);
		if (job) {
			job.title = req.body.title;
			job.department = req.body.department;
			job.emp_id = req.body.emp_id;

			await job.save();
			res.json("Done");
		} else {
			res.json("This job title does not exsits!");
		}
	} catch (e) {
		return res.status(400).send(e.message);
	}
};

export const deleteJob = async (req, res) => {
	try {
		const job = await Job_Title.findByIdAndRemove(req.params.id);
		if (job) {
			res.json("Done");
		} else {
			res.json("This job title does not exsits!");
		}
	} catch (e) {
		return res.status(400).send(e.message);
	}
};
