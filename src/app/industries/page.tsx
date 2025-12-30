import FoodAgroIndustry from "./Components/FoodAgroIndustry"
import DairyIndustrySection from "./Components/DairyIndustrySection"
import ColdStorageSection from "./Components/ColdStorageSection"
import FishMeatProcessingSection from "./Components/FishMeatProcessingSection"

export default function industries (){
    return (
        <div className="max-w-7xl md:px-10 px-2 pb-12 mx-auto">
             <FoodAgroIndustry/>
             <DairyIndustrySection/>
             <ColdStorageSection/>
             <FishMeatProcessingSection/>
        </div>
    )
}