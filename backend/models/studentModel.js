import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: false,
    // Add any other validation you may need for email
  },
  mobile: {
    type: String,
    required: true,
    unique: false,
    // Add any other validation you may need for mobile number
  },
  // Add more fields as needed
  // For example: age, address, etc.
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
