import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var dutySchema = new Schema(
  {
    //creating collections
    emp_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job_Title' },
    started: {type:Date},
    ended: {type:Date},
    duration : {type: String},
    date: {type:Date, required:true},
   
  },
  {
    timestamps: true,
  }
);

const Duty = mongoose.model("Duty", dutySchema);
export default Duty;