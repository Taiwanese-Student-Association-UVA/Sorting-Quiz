import "./fam.css";
import image from "../../assets/Pangolin.png";

const Pangolin = () => {
  return (
    <>
      <div className="pangolin">
        <p>Your Fam is Pangolin!</p>
        <img src={image} alt="Illustration for the Pangolin Family" />
      </div>
    </>
  );
};

export default Pangolin;
