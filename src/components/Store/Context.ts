import React from 'react'

import {
  StateType,
  NonStateType,
  initialState
} from './Types'


const Context = React.createContext<StateType & Partial<NonStateType>>(initialState)


export default Context