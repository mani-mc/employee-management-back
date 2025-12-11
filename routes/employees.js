const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const controller = require("../controllers/employeesController");

const uploadDir = process.env.UPLOAD_DIR || "uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", upload.single("avatar"), controller.create);
router.put("/:id", upload.single("avatar"), controller.update);
router.delete("/:id", controller.remove);

module.exports = router;
