import { CommandController } from '../types/CommandController'
import { CommandResponse } from 'src/types/CommandResponse'
import { InvalidPingUse } from '../helpers/messages'

export class PingController implements CommandController {
  command = (): string => { return 'ping' }
  handler = (args: string[]): CommandResponse => {
    const ip = args[2]
    if (ip == undefined || ip == '') {
      throw new Error(InvalidPingUse)
    }

    console.log(`---|${ip}|---`)

    return { response: `Ping to ${ip}...` }
  }
}

const pingController = new PingController()
export { pingController }
