import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    n_id: String,
    title: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseAssignment" },
    quiz_type: String,
    points: String,
    group: String,
    shuffle_answers: String,
    time_limit: String,
    multiple_attempts: String,
    num_attempts: String,
    view_responses: String,
    show_answers: String,
    access_code: String,
    one_question: String,
    webcam: String,
    lock_questions: String,
    due: String,
    availability: String,
    until: String,
    until_editor: String,
  



  },
  { collection: "quizzes" }
);
export default schema;