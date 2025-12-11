require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const employeesRouter = require("./routes/employees");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server uploads
const uploadDir = process.env.UPLOAD_DIR || "uploads";

app.use(`/${uploadDir}`, express.static(path.join(__dirname, uploadDir)));

app.use("/api/employees", employeesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
