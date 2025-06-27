import React, { useEffect } from "react";
import AboutHero from "./AboutHero";
import LeadershipTeam from "./LeadershipTeam";
import OurAdvantage from "./OurAdvantage";
// import OurNetwork from "./OurNetwork";
import OurPrinciples from "./OurPrinciples";
import OurPurpose from "./OurPurpose";
import OurStory from "./OurStory";
// import SuccessStoriesTestimonials from "./SuccessStoriesTestimonials";

const About: React.FC = () => {
  useEffect(() => {
    // Check if there's a hash in the URL when component mounts
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash to get the element ID
      const elementId = hash.substring(1);
      
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div >
      <AboutHero />
      <OurStory />
      <OurPurpose />
      <OurPrinciples />
      <LeadershipTeam />
      <OurAdvantage />
      {/* <OurNetwork /> */}
      {/* <SuccessStoriesTestimonials /> */}
    </div>
  );
};

export default About;