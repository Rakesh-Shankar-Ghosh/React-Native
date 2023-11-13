import studentModel from "../models/studentModel.js";

export const getStudentsController = async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await studentModel.find();

    res.status(200).send({
      success: true,
      message: "Students fetched successfully",
      students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching students",
    });
  }
};

export const addStudentController = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    // Validations
    if (!name) {
      return res.status(500).send({ error: "Name is Required" });
    }
    if (!email) {
      return res.status(500).send({ error: "Email is Required" });
    }
    if (!mobile) {
      return res.status(500).send({ error: "Mobile is Required" });
    }

    const student = new studentModel({ ...req.body });

    await student.save();
    res.status(201).send({
      success: true,
      message: "Student Added Successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in adding student",
    });
  }
};

export const testStudentController = async (req, res) => {
  try {
    const data = 50;
    res.status(200).send({
      success: true,
      message: "test called ",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting test",
      error: error.message,
    });
  }
};

export const getStudentByIdController = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Fetch the student by their ID from the database
    const student = await studentModel.findById(studentId);

    // If the student is not found, return an error message
    if (!student) {
      return res.status(404).send({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Student fetched successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in fetching student by ID",
    });
  }
};
