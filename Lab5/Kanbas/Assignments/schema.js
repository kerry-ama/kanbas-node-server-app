import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    n_id: String,
    title: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseAssignment" },
    availability: String,
    due: String,
    points: String,
    until: String,
    until_editor: String,
    due_assign: String,
    description: String



  },
  { collection: "assignments" }
);
export default schema;