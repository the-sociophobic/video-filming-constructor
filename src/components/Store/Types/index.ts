import { Site, Question, Responce } from './models'


export type StateType = {
  ready: boolean

  contentfulData: any
  contentful: {
    sites?: Site[]
    questions?: Question[]
    responces?: Responce[]
  }
}

const initialState: StateType = {
  ready: false,

  contentfulData: {},
  contentful: {},
}

export type NonStateType = {
  setState: (obj: any) => void

  contentful: any
  updateContentful: () => void

  registerInitializeCallback: (fn: () => void) => void,
}


export {
  initialState,
}
