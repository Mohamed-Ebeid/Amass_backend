import mongoose from "mongoose";

var { Schema } = mongoose;
mongoose.Promise = global.Promise;

var departmentSchema = new Schema(
  {
    //creating collections
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model("Department", departmentSchema);
export default Department;
