import { CommandResponse } from './CommandResponse'

export interface CommandController {
  command: () => string
  handler: (args: string[]) => CommandResponse
}
