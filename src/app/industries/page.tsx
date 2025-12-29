import FoodAgroIndustry from "./Components/FoodAgroIndustry"
import DairyIndustrySection from "./Components/DairyIndustrySection"
import ColdStorageSection from "./Components/ColdStorageSection"
import FishMeatProcessingSection from "./Components/FishMeatProcessingSection"

export default function industries (){
    return (
        <div className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto">
             <FoodAgroIndustry/>
             <DairyIndustrySection/>
             <ColdStorageSection/>
             <FishMeatProcessingSection/>
        </div>
    )
}