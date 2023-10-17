import { Routes, Route, Navigate } from 'react-router-dom';
import {
  HOME_ROUTE,
  QUIZZES_ROUTE,
  COURSES_ROUTE,
  RATING_ROUTE,
  COMMUNITY_ROUTE,
  ABOUT_ROUTE,
  CALENDAR_ROUTE,
  PROFILE_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  IQTests_ROUTE,
  ENGLISH_ROUTE,
  RESET_ROUTE,
  MATHEMATICS_ROUTE,
  MATHEMATICSCOURSE_ROUTE,
  MATHEMATICSQUIZZES_ROUTE,
  GRAPHICDESIGN_ROUTE,
  PROGRAMMING_ROUTE,
  UIUXDESIGN_ROUTE,
  TOPIC_ROUTE,
} from './constants/routes';
import { useEffect, useState } from 'react';
import Home from './components/HomePage/Home';
import AboutUs from './components/AboutUs';
import Calendar from './components/Calendar';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ResetPassword from './components/Auth/ResetPassword';
import Rating from './components/Rating';
import Community from './components/Community';
import IQTests from './components/HomePage/IQTests';
import English from './components/Courses/English';
import GraphicDesign from './components/Courses/GraphicDesign';
import MathematicsQuizzes from './components/Quizzes/MathematicsQuizzes';
import MathematicsCourses from './components/Courses/MathematicsCourses';
import Programming from './components/Courses/Programming';
import UIUXDesign from './components/Courses/UIUXDesign';
import AllCoursesComponent from './components/AllCoursesComponent';
import AllQuizzesComponent from './components/AllQuizzesComponent';
import Profile from './components/Auth/Profile';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getUserData } from '../src/requests/firebase';
import userContext from './contexts/userContext';
import userDataContext from './contexts/userDataContext';
// import loadingContext from './contexts/dataLoadingContext';
import Topic from '../src/components/Courses/Topic';
import Loading from '../src/components/Loading';

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getUserData(user.email)
          .then((data) => {
            console.log(data);
            setUserData(data);
            setLoading(false);
          })
          .catch(() => {
            setUserData(null);
            setLoading(false);
          });
        console.log(user);
      } else {
        console.log('user is logged out');
        setUser(null);
        setLoading(false);
      }
    });
    return listener;
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />;
        <Footer positionForLoading={'fixed'} bottomPositionForLoading={0} />
      </>
    );
  } else {
    return (
      // <loadingContext.Provider value={loading}>
      <userContext.Provider value={user}>
        <userDataContext.Provider value={userData}>
          <div>
            <Navbar />
            <Routes>
              <Route path={HOME_ROUTE} element={<Home />} />
              <Route path={COURSES_ROUTE} element={<AllCoursesComponent />} />
              <Route path={QUIZZES_ROUTE} element={<AllQuizzesComponent />} />
              <Route path={RATING_ROUTE} element={<Rating />} />
              <Route path={COMMUNITY_ROUTE} element={<Community />} />
              <Route path={CALENDAR_ROUTE} element={<Calendar />} />
              <Route path={ABOUT_ROUTE} element={<AboutUs />} />
              <Route path={SIGNIN_ROUTE} element={<SignIn />} />
              <Route path={RESET_ROUTE} element={<ResetPassword />} />
              <Route path={SIGNUP_ROUTE} element={<SignUp />} />
              <Route path={PROFILE_ROUTE} element={<Profile />} />
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
              <Route path={TOPIC_ROUTE} element={<Topic />} />
              <Route path='*' element={<Navigate to={HOME_ROUTE} />} />
            </Routes>
            <Footer />
          </div>
        </userDataContext.Provider>
      </userContext.Provider>
      // </loadingContext.Provider>
    );
  }
}

export default App;
