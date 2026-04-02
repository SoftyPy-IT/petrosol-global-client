"use client"
import Activity from './__components/Activity'
import Container from '@/app/components/shared/utils/Container'
import Pagination from '@/app/components/shared/utils/Pagination'
import SectionHeader from '@/app/components/shared/utils/SectionHeader'

export default function page() {
  return (
    <Container className='py-10'>
      <SectionHeader
        title="Activities"
        description="Our projects categorized by development status."
      />
      <Activity />
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={() => { }}
      />
    </Container>
  )
}
