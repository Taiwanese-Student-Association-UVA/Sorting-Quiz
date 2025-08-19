import { useState } from "react";
import Quiz from "./Quiz/quiz";
import "./start.css";
// import picture from "start.png";

const Start = () => {
  const [started, setStarted] = useState(false);

  if (started) {
    return <Quiz />;
  }
  return (
    <div className="start">
      <h1>Welcome to TSA's Sorting Quiz!</h1>
      <hr />
      <div className="image-box">
        <img alt="TSA logo" />
      </div>
      <button onClick={() => setStarted(true)}>Start!</button>
    </div>
  );
};

export default Start;
