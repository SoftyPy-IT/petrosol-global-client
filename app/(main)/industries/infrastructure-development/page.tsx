import Industries from '../__components/Industries'
import { infrastructureData } from './__components/infrastructure'

export default function page() {
  return (
    <Industries data={infrastructureData} />
  )
}
