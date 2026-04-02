import Container from '@/app/components/shared/utils/Container'
import SectionHeader from '@/app/components/shared/utils/SectionHeader'
import Mission_Vision_Goal from './__components/Mission_Vision_Goal'
import Managing_Body from './__components/Managing_Body'

export default function Page() {
  return (
    <div>
      <div className="py-12 space-y-12">
        {/* Heading */}
        <SectionHeader
          title="About Us"
          description="Learn more about our purpose, what drives us, and where we are headed."
        />
      </div>
      <Mission_Vision_Goal />
      <Managing_Body />
    </div>
  )
}
