import HeroSection from "./Hero";
import Advantages from "./Advantages";
import PremierLocationsIndia from "./PremierLocationsIndia";
import CityComparison from "./CityComparison";
import SuccessStories from "./SuccessStories";
// import Testimonial from "./Testimonial";

const WhyIndia: React.FC = () => {
  return (
    <div>
        <HeroSection/>
        <Advantages />
        <PremierLocationsIndia />
        <CityComparison />
        <SuccessStories />
        {/* <Testimonial /> */}
    </div>
  );
};

export default WhyIndia;