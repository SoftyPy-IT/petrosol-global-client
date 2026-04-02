import Container from '@/app/components/shared/utils/Container'

interface Props {
  params: Promise<{ slug: string }>
}
export default async function page({ params }: Props) {
  const { slug } = await params
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{slug}</h1>
        <p className="text-gray-600">{slug}</p>
      </div>
    </Container>
  )
}
