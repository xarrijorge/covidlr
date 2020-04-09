import React, { Fragment } from 'react'

import Assessemnt from './components/Assessment'
import Awareness from './components/Awareness'
import Header from './components/Header'
import Faq from './components/Faq'

import 'materialize-css' // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <hr />
        <div className="subMain">
          <Awareness />
          <Faq />
        </div>
      </main>
    </div>
  )
}

export default App
