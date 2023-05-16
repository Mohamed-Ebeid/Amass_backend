import Report from '../Models/report.js';
import Leave from '../Models/leave.js';
import Duty from '../Models/duty.js';

export const make = async (req,res)=>{
	try{
		const {emp_id} = req.body;
		const leave = await Leave.find({emp_id: emp_id});
		const duty = await Duty.find({emp_id: emp_id});
		//res.send(duty);
		const oldReport = await Report.find({emp_id:emp_id});
		if(oldReport.length == 1){
			await Report.findByIdAndRemove({_id: oldReport[0]._id});
			console.log("Deleting done!")
		}
		const report = await new Report({
			emp_id: emp_id,
			duty: duty.map((d)=>(
				{
					duty_id : d._id,
					total_laber : d.duration,
					date : d.date,
				}
				)),
			leave_id: leave._id,
		});
		await report.save()
		res.send(report)

	}
	catch(e){
		res.status(400).send("Error => " + e.message);
	}
}