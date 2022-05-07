import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";

import CourseDetails from "./components/CourseDetails/CourseDetails";
import Courses from "./components/Courses/Courses";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginRegister from "./components/LoginRegister/LoginRegister";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        {/* Header/ Navbar  Component  here*/}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/courses/:courseId">
            <CourseDetails />
            {/* There is no details in CourseDetails. It is made for demo */}
          </Route>
          <Route path="/login-register">
            <LoginRegister />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        {/* Footer Component here */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
