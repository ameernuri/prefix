import { Title } from '../components/common/title/title.comp'
import { MainLayout } from '../components/layout/main-layout/main-layout.comp'

import { gql } from '@apollo/client'
import { apolloClient } from '../gql/apollo'

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query People($filter: PersonFilter) {
        queryPerson(filter: $filter) {
          name
        }
      }
    `,
    variables: {},
  })

  return {
    props: {
      people: data,
    },
  }
}

const Home = ({ people }) => {
  return (
    <MainLayout title='Prefix: Find answers for your software development questions'>
      <Title />
      <pre>{JSON.stringify(people)}</pre>
    </MainLayout>
  )
}

export default Home
