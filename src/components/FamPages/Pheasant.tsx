import "./fam.css";
import image from "../../assets/Pangolin.png";

const Pheasant = () => {
  return (
    <>
      <div className="pheasant">
        <div className="box">
          <p>Your Fam is Pheasant!</p>
          <img src={image} alt="Illustration for the Pangolin Family" />
        </div>
      </div>
    </>
  );
};

export default Pheasant;
