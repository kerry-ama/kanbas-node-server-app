import * as enrollmentsDao from "./dao.js"
export default function EnrollmentRoutes(app) {
    app.delete("/api/enrollments/unenroll/:userId/:courseId", (req, res) => {
        const {userId, courseId} = req.params;
        enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.sendStatus(204);
    });
    app.put("/api/enrollments/enroll/:userId/:courseId", (req, res) => {
        const{userId, courseId} = req.params;
        enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.sendStatus(204);
    })
}