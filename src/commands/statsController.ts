import { CommandController } from '../types/CommandController'
import { CommandResponse } from 'src/types/CommandResponse'
import { InvalidStatsUse } from '../helpers/messages'

class StatsController implements CommandController {
  command = (): string => { return 'stats' }
  handler = (args: string[]): CommandResponse => {
    const user = args[2]
    if (user == undefined || user == '') {
      throw new Error(InvalidStatsUse)
    }

    return { response: `Stats of ${user}...` }
  }
}

const statsController = new StatsController()
export { statsController }
