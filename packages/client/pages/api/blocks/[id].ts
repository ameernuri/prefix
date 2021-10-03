import db from '../../../utils/db/firestore'

const block = async (req, res) => {
  try {
    const { slug } = req.body

    const blocks = await db.collection('blocks').get()
    const blocksData = blocks.docs.map((block) => block.data())

    if (blocksData.some((block) => block.slug === slug)) {
      res.status(400).end()
    } else {
      const { id } = await db.collection('blocks').add({
        ...req.body,
        createdAt: new Date().getTime(),
      })

      res.status(200).json({ id })
    }
  } catch (err) {
    res.status(400).end()
  }
}

export default block
