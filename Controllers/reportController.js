import Report from "../Models/report.js";
import Leave from "../Models/leave.js";
import Duty from "../Models/duty.js";
import Job_Title from "../Models/job.js";

export const make = async (req, res) => {
	try {
		const { emp_id } = req.body;
		const leave = await Leave.find({ emp_id: emp_id });
		const duty = await Duty.find({ emp_id: emp_id });
		const jobTitle = await Job_Title.find({ emp_id: emp_id });

		const oldReport = await Report.find({ emp_id: emp_id });
		if (oldReport.length == 1) {
			await Report.findByIdAndRemove({ _id: oldReport[0]?._id });
			//console.log("Deleting done!");
			//console.log(jobTitle[0]);
			const report = await new Report({
				emp_id: emp_id,
				duty: duty.map((d) => ({
					duty_id: d?._id,
					total_laber: d?.duration,
					date: d?.date,
				})),
				leave_id: leave[0]?._id,
				job_id: jobTitle[0]?._id,
			});
			await report.save();
			res.send({ report: report.duty, leave: leave[0], jobTitle: jobTitle[0] });
		} else {
			const report = await new Report({
				emp_id: emp_id,
				duty: duty.map((d) => ({
					duty_id: d?._id,
					total_laber: d?.duration,
					date: d?.date,
				})),
				leave_id: leave[0]?._id,
				job_id: jobTitle[0]?._id,
			});
			await report.save();
			res.send({ report: report, leave: leave[0], jobTitle: jobTitle[0] });
		}
	} catch (e) {
		res.status(400).send("Error => " + e.message);
	}
};
