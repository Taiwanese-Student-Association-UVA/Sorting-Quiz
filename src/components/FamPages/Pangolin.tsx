import { useState } from "react";
import App from "../../App";
import "./fam.css";
import image from "../../assets/Pangolin.png";

const Pangolin = () => {
  const [restart, setRestart] = useState(false);

  if (restart) {
    return <App />;
  }

  return (
    <>
      <div className="pangolin">
        <div className="box">
          <p>Your Fam is Pangolin!</p>
          <img src={image} alt="Illustration for the Pangolin Family" />
          <button onClick={() => setRestart(true)}>Restart!</button>
        </div>
      </div>
    </>
  );
};

export default Pangolin;
