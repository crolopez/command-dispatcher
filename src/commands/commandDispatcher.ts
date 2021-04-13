import { getControllers } from '../commands/controllers'
import { CommandResponse } from 'src/types/CommandResponse'
import { RequestBody } from 'src/types/RequestBody'
import { InvalidBodyRequest, InvalidCommandFormat, CommandNotRecognised } from '../helpers/messages'

const commandRegex = '/([^ ]+)[ ]*([^ ]*)[ ]*([^ ]*)'

export function commandDispatcher({ command }: RequestBody): CommandResponse {
  if (command === undefined) {
    throw new Error(InvalidBodyRequest)
  }

  const commandParsed = command.match(commandRegex)
  if (commandParsed == null) {
    throw new Error(InvalidCommandFormat)
  }

  const controller = getControllers().filter(x => x.command() == commandParsed[1])[0]
  if (controller === undefined) {
    throw new Error(CommandNotRecognised)
  }

  return controller.handler(commandParsed)
}
