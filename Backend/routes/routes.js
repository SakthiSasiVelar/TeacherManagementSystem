const express = require("express");
const router = express.Router();

const {
  addTeacher,
  getAllTeachers,
  updateTeacher,
  deleteTeacher,
} = require("../Controllers/teacherControllers");

router.post("/addTeacher", addTeacher);
router.get("/getAllTeachers", getAllTeachers);
router.put("/updateTeacher/:id", updateTeacher);
router.delete("/deleteTeacher/:id", deleteTeacher);

module.exports = router;
