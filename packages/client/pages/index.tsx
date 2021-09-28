import { Title } from '../components/common/title/title.comp'
import { MainLayout } from '../components/layout/main-layout/main-layout.comp'

export default function Home() {
  return (
    <MainLayout title='Prefix: Find answers for your software development questions'>
      <Title />
    </MainLayout>
  )
}
