import CompanyHistoryVision from "./components/CompanyHistoryVision"
import CompanyOverview from "./components/CompanyOverview"
import VissionMission from "./components/VissionMission"
import CoreValues from "./components/CoreValues"
import ManagementTeam from "./components/ManagementTeam"
import Services from "./components/Services" 



export default function about (){
    return (
        <div className="">
             <CompanyHistoryVision/>
             <CompanyOverview/>
             <VissionMission/>
             <CoreValues/>
             <ManagementTeam/>
             <Services/>
        </div>
    )
}