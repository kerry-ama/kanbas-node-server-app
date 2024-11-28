import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
export default function CourseRoutes(app) {
  
  // app.post("/api/courses", async (req, res) => {
  //   const course = await dao.createCourse(req.body);
  //   res.json(course);
  // });
 
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    //console.log("courses")
    res.send(courses);
  });
  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
     dao.deleteCourse(courseId);
    res.sendStatus(204);
  });
  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    dao.updateCourse(courseId, courseUpdates);
    res.sendStatus(204);
  });
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });
  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  });

  //ASSIGNMENTS
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });
  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = await assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  });

  //ENROLLMENTS
  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollments = await dao.findCoursesForEnrolledUser(userId);
    res.send(enrollments);
  })
 






}
