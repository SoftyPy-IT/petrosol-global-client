import Industries from "../__components/Industries";
import { shipHandlingData } from "./__components/shipHandling";

export default function page() {
  return (
    <Industries data={shipHandlingData} />
  )
}
