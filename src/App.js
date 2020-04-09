import React, { Fragment } from 'react'

import Assessemnt from './components/Assessment'
import Awareness from './components/Awareness'
import Header from './components/Header'
import QuuickFacts from './components/QuickFacts'

import './style.css'

const Main = () => (
  <div className="col-8 row">
    <Awareness />
    <Assessemnt />
  </div>
)

function App() {
  return (
    <Fragment className="App">
      <Header
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      />
      <main className="row wide">
        <QuuickFacts />
        <Main />
      </main>
    </Fragment>
  )
}

export default App
