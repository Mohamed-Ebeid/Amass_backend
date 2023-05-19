import Leave from "../Models/leave.js";
import Employee from "../Models/employee.js";
//Getting leave for employee
export const getLeave = async (req, res) => {
	try {
		const leave = await Leave.find({ emp_id: req.emp._id });
		if (leave.length >= 1) {
			res.send({
				leave: leave,
			});
		} else {
			res.send({ message: "No leave were found" });
		}
	} catch (e) {
		res.status(400).send("Error => " + e.message);
	}
};

//Get leave report for admin
export const getLeaveAdmin = async (req, res) => {
	try {
		const leave = await Leave.find();
		res.send(
			await Leave.aggregate([
				{
					$lookup: {
						from: "employees",
						localField: "emp_id",
						foreignField: "_id",
						as: "emp",
					},
				},
				{ $project: { emp_id: 0, "emp.emp_pass": 0 } },
			])
		);
	} catch (e) {
		res.status(400).send("Error => " + e.message);
	}
};

//Apply for a leave
export const apply = async (req, res) => {
	try {
		const oldLeave = await Leave.find({ emp_id: req.emp._id });
		if (oldLeave.length >= 1) {
			oldLeave[0].date = req.body.date;
			oldLeave[0].status = "pending...";
			//console.log(oldLeave);
			await oldLeave[0].save();
			res.send({ message: "Updated with the new date" });
		} else {
			const leave = await new Leave({
				emp_id: req.emp._id,
				date: req.body.date,
			}).save();
			res.send(leave);
		}
	} catch (e) {
		res.status(400).send("Error =>" + e.message);
	}
};

//Accept the leave
export const accept = async (req, res) => {
	try {
		const leave = await Leave.findById(req.body.leaveId);
		if (leave) {
			(leave.status = "Accepted"), await leave.save();
			res.json("Accepted");
		} else {
			res.json("This leave does not exsits!");
		}
	} catch (e) {
		res.status(400).send("Error =>" + e.message);
	}
};

//Deny the leave
export const deny = async (req, res) => {
	try {
		const leave = await Leave.findById(req.body.leaveId);
		if (leave) {
			(leave.status = "Denied"), await leave.save();
			res.json("Denied");
		} else {
			res.json("This leave does not exsits!");
		}
	} catch (e) {
		res.status(400).send("Error =>" + e.message);
	}
};
