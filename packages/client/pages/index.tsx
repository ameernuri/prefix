import { addDoc, collection, doc } from '@firebase/firestore'
import { getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Title } from '../components/common/title/title.comp'
import { MainLayout } from '../components/layout/main-layout/main-layout.comp'

import { db } from '../firebase'

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    const snap = await getDocs(collection(db, 'articles'))

    const docs = snap.docs.map((article) => article.data())

    setArticles(docs)
  }

  return (
    <MainLayout title='Prefix: Find answers for your software development questions'>
      <Title />
      <pre>{JSON.stringify(articles)}</pre>
    </MainLayout>
  )
}

export default Home
