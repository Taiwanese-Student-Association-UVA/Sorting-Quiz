import { useState } from "react";
import Quiz from "./Quiz/quiz";
import "./start.css";
import logo from "../assets/logo.png";
// import picture from "../assets/start.png";

const Start = () => {
  const [started, setStarted] = useState(false);

  if (started) {
    return <Quiz />;
  }
  return (
    <div className="start">
      <div className="text">
        <h1>Welcome to TSA's Sorting Quiz!</h1>
        <p>enter description and premise here</p>
      </div>

      <div className="image-container">
        <img src={logo} alt="TSA logo" />
      </div>
      <button onClick={() => setStarted(true)}>Start!</button>
    </div>
  );
};

export default Start;
