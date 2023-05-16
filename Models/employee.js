import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var employeeSchema = new Schema(
  {
    //creating collections
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    contact_address: { type: String, required: true },
    emp_email: { type: String, required: true },
    emp_pass: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    dep_id: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
