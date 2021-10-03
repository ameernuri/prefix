import db from '../../../utils/db/firestore'

const blocks = async (req, res) => {
  try {
    const blockList = await db.collection('blocks').orderBy('createdAt').get()
    const blocksData = blockList.docs.map((block) => ({
      id: block.id,
      ...block.data(),
    }))

    res.status(200).json({ blocksData })
  } catch (err) {
    res.status(400).end()
  }
}

export default blocks
