import { useState } from "react";
import App from "../../App";
import "./fam.css";
import image from "../../assets/Viper.png";

const Viper = () => {
  const [restart, setRestart] = useState(false);

  if (restart) {
    return <App />;
  }

  return (
    <>
      <div className="viper">
        <div className="box">
          <p>Your Fam is Viper!</p>
          <img src={image} alt="Illustration for the Pangolin Family" />
          <button onClick={() => setRestart(true)}>Restart!</button>
        </div>
      </div>
    </>
  );
};

export default Viper;
