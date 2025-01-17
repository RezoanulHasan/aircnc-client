import Property from "../Property/Property";
import "./ParallaxMessage.css";

const ParallaxSlideImage = () => {
  return (
    <section className="pt-16 md:pt-28">
      <div className="parallax-bg bg-fixed py-28 px-5 md:px-12 lg:px-20  rounded-lg   ">
        <div className="bg-black bg-opacity-50  ">
          <Property></Property>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSlideImage;
