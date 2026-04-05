import Industries from '../__components/Industries'
import { berthOperatingData } from './__components/berthOperating'

export default function page() {
  return (
    <Industries data={berthOperatingData} />
  )
}
