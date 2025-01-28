
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["instructor", "student"],
      default: "student",
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    photoURL: { // Added photoURL field
      type: String,
      default: "", // Default empty string if no photo URL is provided
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

