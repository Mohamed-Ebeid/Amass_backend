import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var reportSchema = new Schema(
  {
    emp_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    duty: [
      {
        duty_id: { type: mongoose.Schema.Types.ObjectId, ref: "Duty" },
        total_laber: { type: String },
        date: { type: Date },
      },
    ],
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job_Title" },
    leave_id: { type: mongoose.Schema.Types.ObjectId, ref: "Leave" },
    salary: { type: String },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;
