import React from "react";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Moe Coovadia</h1>
        <p>
          Mississauga, Ontario, L4Z4C7 | (416) 371-5468 | Coovadia.Moe@gmail.com
        </p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer with expertise in JavaScript,
          React, and CSS. I love creating user-friendly and visually appealing
          web applications.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>
      {<Contact />}
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;
