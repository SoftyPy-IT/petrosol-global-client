import Industries from "../__components/Industries";
import { logisticsSupplyChainData } from "./__components/logistics-supply-chain";

export default function page() {
  return (
    <Industries data={logisticsSupplyChainData} />
  )
}
