import React from 'react'
import { isEmpty } from 'lodash'

import {
  StateType,
  initialState,
  NonStateType,
} from './Types'
import Context from './Context'
import {
  parseContentfulItems,
  createContentfulClient
} from '../../utils/contentful'


class Provider extends React.Component<any, StateType> {

  state = initialState

  initializeCallBacks: Function[] = []

  componentDidMount = () => {
    this.loadContentful()
  }

  loadContentful = async () => {
    const client = createContentfulClient()

    this.setState({ ready: false })
    this.setState({
      contentfulData: await parseContentfulItems((await client.getEntries({ limit: 200 })).items)
    })
    this.setState({ ready: true })

    console.log(this.state.contentfulData)

    this.callInitializeCallbacks()
  }

  updateContentful = async (update: boolean = true) => {
    await this.loadContentful()

    update &&
      this.callInitializeCallbacks()
  }

  registerInitializeCallback = (fn: Function) => {
    this.initializeCallBacks.push(fn)
    !isEmpty(this.state.contentfulData) && fn()
  }

  callInitializeCallbacks = () =>
    setTimeout(() =>
      this.initializeCallBacks
        .forEach((callback: Function) =>
          callback())
      , 100
    )

  stateAndSetters = () => {
    const nonState: NonStateType = {
      setState: (obj: any) => this.setState(obj),

      contentful: this.state.contentfulData,
      updateContentful: this.updateContentful,

      registerInitializeCallback: this.registerInitializeCallback,
    }

    return ({
      ...(this.state.ready ? this.state : initialState),
      ...nonState
    })
  }

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default Provider