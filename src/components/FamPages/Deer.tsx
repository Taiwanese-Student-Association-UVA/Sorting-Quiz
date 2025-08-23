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
          <p>
            Hmm, I see...
            <br />
            I've analyzed your dream and it seems you resonate most with...
          </p>
          <h1>
            <strong>
              <em>The Sika Deers!</em>
            </strong>
          </h1>
          <img src={image} alt="Illustration for the Pangolin Family" />
          <div className="description">
            <p>
              The{" "}
              <strong>
                <em>Sika Deers</em>
              </strong>{" "}
              are known for their patient, amiable, loyal, and easygoing
              personalities!
            </p>
            <p>If you'd like to take the quiz again, click the button below!</p>
          </div>
          <button onClick={() => setRestart(true)}>Restart!</button>
        </div>
      </div>
    </>
  );
};

export default Deer;
