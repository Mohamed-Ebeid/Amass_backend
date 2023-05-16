import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var leaveSchema = new Schema(
  {
    //creating collections
    emp_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: "Job_Title" },
    date: { type: Date, required: true },
    status: { type: String, default: "pending..." },
  },
  {
    timestamps: true,
  }
);

const Leave = mongoose.model("Leave", leaveSchema);
export default Leave;
