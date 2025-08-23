import { useState } from "react";
import Quiz from "./Quiz/quiz";
import "./start.css";
import start from "../assets/start.png";

const Start = () => {
  const [started, setStarted] = useState(false);

  if (started) {
    return <Quiz />;
  }
  return (
    <div className="start">
      <h1>Welcome to TSA's Sorting Quiz!</h1>
      <div className="text">
        <p>
          It's the night before GBM and all you can think about is how excited
          you are! As you drift off into slumber, you dream about how your
          journey to tomorrow will go...
        </p>
      </div>

      <div className="image-container">
        <img src={start} alt="TSA logo" />
      </div>
      <button onClick={() => setStarted(true)}>Start!</button>
    </div>
  );
};

export default Start;
