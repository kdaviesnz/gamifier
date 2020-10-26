console.log("RENDERING client/main.js")

import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'


hydrate(<App/>, document.getElementById('root'))

console.log("LOADED client/main.js")