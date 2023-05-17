import Employee from "../Models/employee.js";
import { generateToken, isAuth, isAdmin } from "../utils.js";
import bcrypt from "bcryptjs";

//Adding a new employee
export const addEmp = async (req, res) => {
	try {
		const emp = await new Employee({
			fname: req.body.fname,
			lname: req.body.lname,
			gender: req.body.gender,
			age: req.body.age,
			contact_address: req.body.contact_address,
			emp_email: req.body.emp_email,
			emp_pass: bcrypt.hashSync(req.body.emp_pass),
			dep_id: req.body.dep_id,
			isAdmin: req.body.isAdmin,
		}).save();

		res.send({
			_id: emp._id,
			fname: emp.fname,
			lname: emp.lname,
		});
	} catch (e) {
		return res.status(400).send("Error =>" + e.message);
	}
};

//Sgining in
export const signIn = async (req, res) => {
	const emp = await Employee.findOne({ emp_email: req.body.emp_email });
	try {
		if (emp) {
			if (bcrypt.compareSync(req.body.emp_pass, emp.emp_pass)) {
				res.send({
					_id: emp._id,
					fname: emp.fname,
					lname: emp.lname,
					emp_email: emp.emp_email,
					isAdmin: emp.isAdmin,
					token: generateToken(emp),
				});
				return;
			} else {
				return res.status(401).send({ message: "Invalid password" });
			}
		}
		return res
			.status(401)
			.send({ message: "This email does not exist in our database" });
	} catch (e) {
		return res.status(400).send("Error =>" + e.message);
	}
};

//Getting all the Employee
export const allEmp = async (req, res) => {
	try {
		const emp = await Employee.find().select("-emp_pass");

		if (emp.length === 0) {
			return res.status(404).send("No employee were found!");
		} else {
			res.send(emp);
			return;
		}
	} catch (e) {
		return res.status(400).send("Error =>" + e.message);
	}
};
//Getting a single employee
export const singleEmp = async (req, res) => {
	try {
		const emp = await Employee.findById(req.emp._id).select("-emp_pass");
		res.send(emp);
	} catch (e) {
		res.status(400).send("Error => " + e.message);
	}
};
//Getting all employees depends on the department
export const depEmp = async (req, res) => {
	try {
		const emp = await Employee.find({ dep_id: req.body.dep_id });
		res.send(emp);
	} catch (e) {
		return res.status(400).send("Error =>" + e.message);
	}
};
