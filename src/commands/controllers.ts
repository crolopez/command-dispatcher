import { CommandController } from 'src/types/CommandController'
import { statsController } from './statsController'
import { pingController } from './pingController'
import { healthCheckController } from './healthcheckController'

export const getControllers = (): CommandController[] => ([
  statsController,
  pingController,
  healthCheckController,
])
