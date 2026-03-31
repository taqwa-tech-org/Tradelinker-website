import HVACServicePage from "./components/HVACServicePage/page";
import RefrigerationServicePage from "./components/RefrigerationServicePage/page";
import IndustrialConstructionPage from "./components/IndustrialConstructionPage/page";
import TurnkeyProjectManagementPage from "./components/TurnkeyProjectManagementPage/page";
import MachineryEquipmentSupplyPage from "./components/MachineryEquipmentSupplyPage/page";
import GasMeteringTransmissionLine from "./components/GasMetering&TransmissionLine/page";
import PetroChemicalTransmissionLine from "./components/PetroChemical&TransmissionLine/page";

export default function services() {
    return (
        <div className="max-w-7xl md:px-10 px-2 pb-12 mx-auto">
            <RefrigerationServicePage />
            <IndustrialConstructionPage />
            <TurnkeyProjectManagementPage />
            <MachineryEquipmentSupplyPage />
            <GasMeteringTransmissionLine />
            <PetroChemicalTransmissionLine/>
            <HVACServicePage />
        </div>
    );
}
