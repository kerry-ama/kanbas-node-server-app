import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
 {
   
    _id: String,
    n_id: String,
    image: String,
    name: String,
   number: String,
   startDate: Date,
   endDate: Date,
   department: String,
   credits: Number,
   description: String,
 },
 { collection: "courses" }
);
export default courseSchema;