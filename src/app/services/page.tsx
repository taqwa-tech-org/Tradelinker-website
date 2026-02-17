import HVACServicePage from "./components/HVACServicePage/page"
import RefrigerationServicePage from "./components/RefrigerationServicePage/page"
import IndustrialConstructionPage from "./components/IndustrialConstructionPage/page"
import TurnkeyProjectManagementPage from "./components/TurnkeyProjectManagementPage/page"
import MachineryEquipmentSupplyPage from "./components/MachineryEquipmentSupplyPage/page"

export default function services (){
    return (
        <div className="max-w-7xl md:px-10 px-2 pb-12 mx-auto">
             <HVACServicePage/>
             <TurnkeyProjectManagementPage/>
             <IndustrialConstructionPage/>
             <RefrigerationServicePage/>
             <MachineryEquipmentSupplyPage/>     
        </div>
    )
}