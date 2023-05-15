import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var reportSchema = new Schema(
  {
    //creating collections
    emp_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    duty_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Duty' },
    job_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Duty'},
    leave_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Leave'},
    total_laber:{type:String, required true},
    salary : {type: String, required: true},
    date: {type:Date, required:true},
   
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;