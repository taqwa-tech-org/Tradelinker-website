import HVACServicePage from "./components/HVACServicePage/page"
import RefrigerationServicePage from "./components/RefrigerationServicePage/page"
import IndustrialConstructionPage from "./components/IndustrialConstructionPage/page"
import TurnkeyProjectManagementPage from "./components/TurnkeyProjectManagementPage/page"
import MachineryEquipmentSupplyPage from "./components/MachineryEquipmentSupplyPage/page"

export default function services (){
    return (
        <div>
             <HVACServicePage/>
             <RefrigerationServicePage/>
             <IndustrialConstructionPage/>
             <TurnkeyProjectManagementPage/>
             <MachineryEquipmentSupplyPage/>
        </div>
    )
}