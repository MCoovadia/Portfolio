import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import TaskManager from "./components/TaskManager";
import TypingTest from "./components/TypingTest";
import "bulma/css/bulma.min.css";
import "./styles/Navbar.css";
import "./styles/Taskmanager.css";
import "./styles/TypingTest.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/TypingTest" element={<TypingTest />} />
            <Route path="/TaskManager" element={<TaskManager />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
