import React, { Fragment } from 'react'

import Assessemnt from './components/Assessment'
import Awareness from './components/Awareness'
import Header from './components/Header'
import QuuickFacts from './components/QuickFacts'
import Faq from './components/Faq'

import 'materialize-css' // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import './style.css'

function App() {
  return (
    <Fragment className="App">
      <Header
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      />
      <main className="main">
        <QuuickFacts />
        <div className="subMain">
          <Awareness />
          <Faq />
        </div>
      </main>
    </Fragment>
  )
}

export default App
