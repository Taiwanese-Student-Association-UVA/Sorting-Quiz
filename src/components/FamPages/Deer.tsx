import { useState } from "react";
import App from "../../App";
import "./fam.css";
import image from "../../assets/Deer.png";

const Deer = () => {
  const [restart, setRestart] = useState(false);

  if (restart) {
    return <App />;
  }

  return (
    <>
      <div className="deer">
        <div className="box">
          <p>Your Fam is Deer!</p>
          <img src={image} alt="Illustration for the Pangolin Family" />
          <button onClick={() => setRestart(true)}>Restart!</button>
        </div>
      </div>
    </>
  );
};

export default Deer;
