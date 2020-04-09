import React, { Fragment } from 'react'

import Assessemnt from './components/Assessment'
import Awareness from './components/Awareness'
import Header from './components/Header'
import QuuickFacts from './components/QuickFacts'

import './App.css'

const Main = () => (
  <Fragment>
    <Awareness />
    <Assessemnt />
  </Fragment>
)

function App() {
  return (
    <Fragment className="App">
      <Header />
      <QuuickFacts />
      <Awareness />
      <Assessemnt />
    </Fragment>
  )
}

export default App
