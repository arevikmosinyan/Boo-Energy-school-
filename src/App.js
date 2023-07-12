import { Routes, Route, Navigate } from 'react-router-dom';
import {
  HOME_ROUTE,
  QUIZZES_ROUTE,
  COURSES_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  IQTests_ROUTE,
  ENGLISH_ROUTE,
  MATHEMATICS_ROUTE,
  MATHEMATICSCOURSE_ROUTE,
  MATHEMATICSQUIZZES_ROUTE,
  GRAPHICDESIGN_ROUTE,
  PROGRAMMING_ROUTE,
  UIUXDESIGN_ROUTE,
} from './constants/routes';

import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUs';

import Calendar from './components/Calendar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Rating from './components/Rating';
import Community from './components/Community';
import IQTests from './components/HomePage/IQTests';
import English from './components/Courses/English';
import GraphicDesign from './components/Courses/GraphicDesign';
import MathematicsQuizzes from './components/Quizzes/MathematicsQuizzes';
import MathematicsCourses from './components/Courses/MathematicsCourses';
import Programming from './components/Courses/Programming';
import UIUXDesign from './components/Courses/UIUXDesign';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        {/* <Route path={COURSES_ROUTE} element={<Courses />} /> */}
        {/* <Route path={QUIZZES_ROUTE} element={<Quizzes />} /> */}
        <Route path={RATING_ROUTE} element={<Rating />} />
        <Route path={COMMUNITY_ROUTE} element={<Community />} />
        <Route path={CALENDAR_ROUTE} element={<Calendar />} />
        <Route path={ABOUT_ROUTE} element={<AboutUs />} />
        <Route path={SIGNIN_ROUTE} element={<SignIn />} />
        <Route path={SIGNUP_ROUTE} element={<SignUp />} />
        <Route path={IQTests_ROUTE} element={<IQTests />} />
        <Route path={ENGLISH_ROUTE} element={<English />} />
        <Route
          path={MATHEMATICSCOURSE_ROUTE}
          element={<MathematicsCourses />}
        />
        <Route
          path={MATHEMATICSQUIZZES_ROUTE}
          element={<MathematicsQuizzes />}
        />
        <Route path={GRAPHICDESIGN_ROUTE} element={<GraphicDesign />} />
        <Route path={PROGRAMMING_ROUTE} element={<Programming />} />
        <Route path={UIUXDESIGN_ROUTE} element={<UIUXDesign />} />
        <Route path='*' element={<Navigate to={HOME_ROUTE} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
