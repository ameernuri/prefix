import db from '../../../utils/db'

const docs = async (req, res) => {
  try {
    const { slug } = req.body
    console.log('body', req.body)
    console.log('type of body', typeof req.body)
    console.log('slug', slug)
    const docs = await db.collection('docs').get()
    const articlesData = docs.docs.map((doc) => doc.data())

    if (articlesData.some((doc) => doc.slug === slug)) {
      res.status(400).end()
    } else {
      const { id } = await db.collection('docs').add({
        ...req.body,
        createdAt: new Date().toISOString(),
      })
      res.status(200).json({ id })
    }
  } catch (err) {
    res.status(400).end()
  }
}

export default docs
