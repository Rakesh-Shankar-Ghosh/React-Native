import express from "express";
const router = express.Router();
import {
  addStudentController,
  getStudentByIdController,
  getStudentsController,
  testStudentController,
} from "../controllers/studentController.js";

router.get("/getStudents", getStudentsController);
router.get("/testStudent", testStudentController);
router.post("/addStudent", addStudentController);
router.get("/getStudentById/:studentId", getStudentByIdController);

export default router;
