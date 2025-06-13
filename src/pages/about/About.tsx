import AboutHero from "./AboutHero";
import LeadershipTeam from "./LeadershipTeam";
import OurAdvantage from "./OurAdvantage";
import OurNetwork from "./OurNetwork";
import OurPrinciples from "./OurPrinciples";
import OurPurpose from "./OurPurpose";
import OurStory from "./OurStory";
import SuccessStoriesTestimonials from "./SuccessStoriesTestimonials";

const About: React.FC = () => {
  return (
    <div >
      <AboutHero />
      <OurStory />
      <OurPurpose />
      <OurPrinciples />
      <LeadershipTeam />
      <OurAdvantage />
      <OurNetwork />
      <SuccessStoriesTestimonials />
    </div>
  );
};

export default About;