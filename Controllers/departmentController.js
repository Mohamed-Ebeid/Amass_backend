import Department from "../Models/department.js";
//Get a single dep
export const getDep = async (req, res) => {
	try {
		const dep = await Department.findById(req.params.id);
		if (dep) {
			res.json(dep);
		} else {
			res.json("Does not exists! ");
		}
	} catch (e) {
		return res.status(400).send("Error => " + e.message);
	}
};

//add a department
export const addDep = async (req, res) => {
	try {
		const dep = await new Department({
			name: req.body.name,
		}).save();
		res.json("Added successfully! ");
	} catch (e) {
		return res.status(400).send("Error => " + e.message);
	}
};

//Deleting a Department
export const deleteDep = async (req, res) => {
	try {
		const dep = await Department.findById(req.params.id);
		if (dep) {
			await Department.findByIdAndRemove(req.params.id);
			res.json("Deleted successfully! ");
		} else {
			res.json("Does not exists! ");
		}
	} catch (e) {
		return res.status(400).send(e.message);
	}
};

//Getting all the department
export const allDep = async (req, res) => {
	try {
		const dep = await Department.find();

		if (dep.length === 0) {
			return res.status(404).send("No employee were found!");
		} else {
			res.send(dep);
			return;
		}
	} catch (e) {
		return res.status(400).send(e.message);
	}
};

//Updating a department
export const updateDep = async (req, res) => {
	try {
		const dep = await Department.findById(req.params.departmentId);
		if (dep) {
			dep.name = req.body.name;
			await dep.save();
			res.json("Done");
		} else {
			res.json("This department does not exsits!");
		}
	} catch (e) {
		return res.status(400).send(e.message);
	}
};
