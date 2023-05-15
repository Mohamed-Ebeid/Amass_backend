import Leave from "../Models/leave.js";

export const apply = async (req,res) =>{
	try{
		const leave = await new Leave({
			emp_id: req.emp._id,
			date: req.body.date
		}).save()
		res.send(leave);
	}catch(e){
		res.status(400).send('Error =>' + e.message);
	}
}

export const accept = async (req,res) =>{
	try{
		const leave = await Leave.findById(req.body.leaveId);
		if (leave) {
			leave.status = "accepted",	
			await leave.save();
			res.json(leave);
		} else {
			res.json("This leave does not exsits!");
		}
	}catch(e){
		res.status(400).send('Error =>' + e.message);
	}
}

export const deny = async (req,res) =>{
	try{
		const leave = await Leave.findById(req.body.leaveId);
		if (leave) {
			leave.status = "Denied",	
			await leave.save();
			res.json(leave);
		} else {
			res.json("This leave does not exsits!");
		}
	}catch(e){
		res.status(400).send('Error =>' + e.message);
	}
}