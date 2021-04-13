import express from 'express'
import { commandDispatcher } from '../commands/commandDispatcher'
import { ServerMessage } from '../helpers/messages'

const rootRouter = express.Router()

rootRouter.get('/', async (req, res): Promise<any> => {
  try {
    const response = commandDispatcher(req.body)
    return res.json(response)
  } catch (error) {
    return res.status(ServerMessage.ERROR.INTERNAL_SERVER_ERROR).json({
      reason: error.message,
    })
  }
})

export default rootRouter