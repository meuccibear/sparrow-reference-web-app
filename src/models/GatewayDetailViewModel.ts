import Node from "../components/models/Node";
import { SignalStrengths } from "../components/presentation/uiHelpers";

interface GatewayDetailViewModel {
  gateway?: {
    uid: string;
    name: string;
    lastActivity: string;
    location: string;
    voltage: string;
    cellBars?: SignalStrengths;
    cellBarsIconPath?: string | null;
    cellBarsTooltip?: string | null;
    wifiBars?: SignalStrengths;
    wifiBarsIconPath?: string | null;
    wifiBarsTooltip?: string | null;
  };
  nodes?: Node[];
}

export default GatewayDetailViewModel;