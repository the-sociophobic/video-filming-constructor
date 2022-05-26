import React from 'react'
// import ReactDOM from 'react-dom/client'

import { Provider } from './components/Store'
import Loader from './components/Loader'
import Page from './components/Page'

import './styles/index.sass'


const App = () =>
  <Provider>
    <Loader />
    <div className="App">
      <Page />
    </div>
  </Provider>


export default App
