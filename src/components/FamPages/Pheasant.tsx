import { useState } from "react";
import App from "../../App";
import "./fam.css";
import image from "../../assets/Pangolin.png";

const Pheasant = () => {
  const [restart, setRestart] = useState(false);

  if (restart) {
    return <App />;
  }
  return (
    <>
      <div className="pheasant">
        <div className="box">
          <p>Your Fam is Pheasant!</p>
          <img src={image} alt="Illustration for the Pangolin Family" />
        </div>
        <button onClick={() => setRestart(true)}>Restart!</button>
      </div>
    </>
  );
};

export default Pheasant;
