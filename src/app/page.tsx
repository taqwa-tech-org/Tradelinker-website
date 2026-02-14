import Herosection from "../components/Home/HeroSection"
import CompanyIntroSection from "../components/Home/CompanyIntroSection"
import CoreServiceSection from "../components/Home/CoreServiceSection"
import CTASection from "../components/Home/CTASection"
import GlobalPartners from "../components/Home/GlobalPartners"
import CompanyHistoryVision from "./about/components/CompanyHistoryVision"
import MissionValues from "./about/components/MissionValues"


export default function Home() {
  return <div>
    
 <Herosection/>
 <CompanyIntroSection/>
 <CompanyHistoryVision/>
 {/* <MissionValues/> */}
 <CoreServiceSection/>
 <GlobalPartners/>
 <CTASection/>
  </div>;
}
