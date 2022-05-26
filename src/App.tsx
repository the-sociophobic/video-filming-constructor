import React from 'react'

import { Provider } from './components/Store'
import Loader from './components/Loader'

import './styles/index.sass'


const App = () =>
  <Provider>
    <Loader />
    <div className="App">

    </div>
  </Provider>


export default App
