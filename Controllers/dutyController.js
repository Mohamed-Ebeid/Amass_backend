import Duty from '../Models/duty.js';

export const startDuty = async (req,res)=>{
	try{
		const date = new Date();
		//console.log(req.emp);
		const duty = await new Duty({
			emp_id: req.emp._id,
			started: date,
			date: date,
		}).save();

		res.send({duty_id: duty._id,message: "started!"});
	}catch(e){
		res.status(400).send('Error => ' + e.message);
	}
}

export const endDuty = async (req,res)=>{
	try{
		const duty = await Duty.findById(req.params.dutyId);
		if (duty) {
			const date = new Date();
			duty.ended = date;
			//In hours
			duty.duration = 
				((date.getTime()-duty.started.getTime()) / 3600000).toString().slice(0,4);
			await duty.save();
			res.json(duty);
		} else {
			console.log(req.body);
			res.json("Something went wrong!");
		}
	}catch(e){
		res.status(400).send('Error => ' + e.message);
	}
}

