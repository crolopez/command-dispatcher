import { CommandController } from '../types/CommandController'
import { CommandResponse } from 'src/types/CommandResponse'

export class HealthCheckController implements CommandController {
  command = (): string => { return 'health_check' }
  handler = (): CommandResponse => { return { response: 'Bot healthcheck...' } }
}

const healthCheckController = new HealthCheckController()
export { healthCheckController }
