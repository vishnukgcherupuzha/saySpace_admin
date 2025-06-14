import HeroSection from "./Hero";
import ServiceCategories from "./ServiceCategories";
import StrategicConsultingDetail from "./StrategicConsultingDetail";
import LocationAdvisoryDetail from "./LocationAdvisoryDetail";
import TalentAcquisitionDetail from "./TalentAcquisitionDetail";
import LegalComplianceDetail from "./LegalComplianceDetail";
import OperationalExcellenceDetail from "./OperationalExcellenceDetail";
import OngoingManagementDetail from "./OngoingManagementDetail";
import EngagementModels from "./EngagementModels";
import IndustryExpertise from "./IndustryExpertise";
import TechnologyServices from "./TechnologyServices";
import WhyChooseUsServices from "./WhyChooseUsServices";

const Services: React.FC = () => {
  return (
    <div >
      <HeroSection />
      <ServiceCategories />
      <StrategicConsultingDetail />
      <LocationAdvisoryDetail />
      <TalentAcquisitionDetail />
      <LegalComplianceDetail />
      <OperationalExcellenceDetail />
      <OngoingManagementDetail />
      <EngagementModels />
      <IndustryExpertise />
      <TechnologyServices />
      <WhyChooseUsServices />
    </div>
  );
};

export default Services;