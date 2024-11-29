import Database from "../Database/index.js";
import model from "./model.js";
//import { getAllEnrollments } from "../Enrollments/dao.js";

export function findAllCourses() {
  return model.find();
  //return Database.courses;
}
  
  export function createCourse(course) {
    delete course._id;
    return model.create(course); //inserts record into database

    // const newCourse = { ...course, _id: Date.now().toString() };
    // Database.courses = [...Database.courses, newCourse];
    // return newCourse;
  }

  export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
   }
/*   
  export function deleteCourse(courseId) {
    const { courses } = Database;
    const enrollments= getAllEnrollments();
    Database.courses = courses.filter((course) => course._id !== courseId);
    Database.enrollments = enrollments.filter(
      (enrollment) => enrollment.course !== courseId
  );}
  */

  export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, courseUpdates);

    // const { courses } = Database;
    // const course = courses.find((course) => course._id === courseId);
    // Object.assign(course, courseUpdates);
    // return course;
  }

  
 
  
  
  
  
