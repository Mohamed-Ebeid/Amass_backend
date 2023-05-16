import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import employeeRoutes from "./Routes/employeeRoutes.js";
import departmentRoutes from "./Routes/departmentRoutes.js";
import jobRoutes from "./Routes/jobRoutes.js";
import dutyRoutes from "./Routes/dutyRoutes.js";
import leaveRoutes from "./Routes/leaveRoutes.js";
import reportRoutes from "./Routes/reportRoutes.js";

const app = express();
dotenv.config();

//db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// route middlewares
app.get("/api", function (req, res) {
  // const date = new Date();
  // res.send(console.log(date));
  res.json("Hello from the backend");
  //console.log(req)
});

app.use("/api/employee", employeeRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/duty", dutyRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/report", reportRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on port 5000")
);
