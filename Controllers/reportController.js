import Report from '../Models/report.js';
import Leave from '../Models/leave.js';
import Duty from '../Models/duty.js';

export const make = async (req,res)=>{
	try{
		const {emp_id} = req.body;
		const leave = await Leave.find({emp_id: emp_id});
		const duty = await Duty.find({emp_id: emp_id});
		res.send({"leave" : leave, "duty" : duty});
	}
	catch(e){
		res.status(400).send("Error => " + e.message);
	}
}