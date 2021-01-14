import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import home from "./Pages/home";
import Exam from "./Pages/Exam";
import addcurses from "./Pages/addcurses";
import AddExam from "./Pages/AddExam";



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={home} />
        <Route exact path="/addcurses" component={addcurses} />
        <Route exact path="/exams/:courseId" component={Exam} />
        <Route exact path="/exams/:courseId/addExam" component={AddExam} />
      </div>
    </Router>


  );
}

export default App;
