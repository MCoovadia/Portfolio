import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/taskmanager">Task Manager</Link>
        </li>
        <li>
          <Link to="/TypingTest">Typing Game</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
