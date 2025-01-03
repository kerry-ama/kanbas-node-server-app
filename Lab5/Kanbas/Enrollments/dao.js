import Database from "../Database/index.js";
export function getAllEnrollments() {
  const { enrollments } = Database;
  return enrollments;
}
export function enrollUserInCourse(userId, courseId) {
  //const { enrollments } = Database;
  const enrollments = getAllEnrollments();
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
export function unenrollUserFromCourse(userId, courseId) {
    //const {enrollments} = Database;
    const enrollments = getAllEnrollments();
    const index = enrollments.findIndex(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId);
    if (index !== -1 ) {
       enrollments.splice(index, 1)
    }
    

}


