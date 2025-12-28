import AboutHero from "./components/AboutHero"
import CompanyOverview from "./components/CompanyOverview"
import VissionMission from "./components/VissionMission"
import CoreValues from "./components/CoreValues"
import ManagementTeam from "./components/ManagementTeam"
import Services from "./components/Services" 



export default function about (){
    return (
        <div>
             <AboutHero/>
             <CompanyOverview/>
             <VissionMission/>
             <CoreValues/>
             <ManagementTeam/>
             <Services/>
        </div>
    )
}