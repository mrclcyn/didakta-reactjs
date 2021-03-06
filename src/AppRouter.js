import { Routes, Route } from "react-router-dom";
import LessonsContext from "./LessonsContext";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Course from "./components/Course";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import Profile from "./components/Profile";
import ProfileQuizResult from "./components/ProfileQuizResult";
import NotFound from "./components/NotFound";
import Defaultsite from "./components/Defaultsite";

const AppRouter = () => {
  return (
    <LessonsContext>
      <>
        <Routes>
          <Route path="/defaultsite" element={<Defaultsite />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/user/:userId" element={<Profile />} />
          <Route
            path="/user/:userId/quiz/result/:lessonId"
            element={<ProfileQuizResult />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:lessonId" element={<Course />} />
          <Route path="/quiz/:lessonId/:questionId" element={<Quiz />} />
          <Route path="/quiz/result/:lessonId" element={<QuizResult />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </LessonsContext>
  );
};

export default AppRouter;
