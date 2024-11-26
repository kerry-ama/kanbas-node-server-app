//const express = require("express"); //require is like import (older syntax Commonjs)
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Lab5/Kanbas/Users/routes.js";
import "dotenv/config";
import session from "express-session";
import CourseRoutes from "./Lab5/Kanbas/Courses/routes.js";
import ModuleRoutes from "./Lab5/Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Lab5/Kanbas/Assignments/routes.js";
import EnrollmentRoutes from "./Lab5/Kanbas/Enrollments/routes.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
}));  
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  
  app.use(session(sessionOptions));
  
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000); //port 
//app.listen(4000);