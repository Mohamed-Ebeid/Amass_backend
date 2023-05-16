import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var jobSchema = new Schema(
  {
    //creating collections
    title: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    emp_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  },
  {
    timestamps: true,
  }
);

const Job_Title = mongoose.model("Job_Title", jobSchema);
export default Job_Title;
