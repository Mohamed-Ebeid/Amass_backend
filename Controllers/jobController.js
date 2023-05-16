import Job_Title from "../Models/job.js";

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
