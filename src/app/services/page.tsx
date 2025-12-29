import HVACServicePage from "./components/HVACServicePage/page"
import RefrigerationServicePage from "./components/RefrigerationServicePage/page"
import IndustrialConstructionPage from "./components/IndustrialConstructionPage/page"
import TurnkeyProjectManagementPage from "./components/TurnkeyProjectManagementPage/page"
import MachineryEquipmentSupplyPage from "./components/MachineryEquipmentSupplyPage/page"

export default function services (){
    return (
        <div className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto pb-8 md:pb-13 lg:pb-15">
             <HVACServicePage/>
             <RefrigerationServicePage/>
             <IndustrialConstructionPage/>
             <TurnkeyProjectManagementPage/>
             <MachineryEquipmentSupplyPage/>     
        </div>
    )
}