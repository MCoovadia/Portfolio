import React from "react";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home ">
      <div className="h-full	 home">
        <header className="text-center py-4">
          <h1 className="text-7xl  font-extrabold">Moe Coovadia</h1>
          <p className=" font-extrabold">
            Mississauga, Ontario, L4Z 4C7 | (416) 371-5468 |
            Coovadia.Moe@gmail.com
          </p>
        </header>
      </div>
      <section>
        <div className="Skills">{<Skills />}</div>
      </section>
    </div>
  );
};

export default Home;
