import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
const Landing = () => {
  return (
    <div>
      <Header />
      <img src="./images/cover.jpeg" alt="" />
      <div className="tagline">
        <h2>Agricultural insurance and governance</h2>
      </div>
      <Form />
    </div>
  );
};

export default Landing;
