import { useState } from "react";
import App from "../../App";
import "./fam.css";
import image from "../../assets/Pheasant.png";

const Pheasant = () => {
  const [restart, setRestart] = useState(false);

  if (restart) {
    return <App />;
  }

  return (
    <>
      <div className="pheasant">
        <div className="box">
          <p>
            Hmm, I see...
            <br />
            I've analyzed your dream and it seems you resonate most with...
          </p>
          <h1>
            <strong>
              <em>The Mikado Pheasants!</em>
            </strong>
          </h1>
          <img src={image} alt="Illustration for the Pangolin Family" />
          <div className="description">
            <p>
              The{" "}
              <strong>
                <em>Mikado Pheasants</em>
              </strong>{" "}
              are known for their creativity, resilience, intelligence, and
              noble demeanor!
            </p>
            <p>If you'd like to take the quiz again, click the button below!</p>
          </div>
          <button onClick={() => setRestart(true)}>Restart!</button>
        </div>
      </div>
    </>
  );
};

export default Pheasant;
