import React, { Fragment } from 'react'

import Assessemnt from './components/Assessment'
import Awareness from './components/Awareness'
import Header from './components/Header'
import QuickFacts from './components/QuickFacts'
import Faq from './components/Faq'

import AirTramission from './images/airTransmission.svg'
import Human2Human from './images/person2person.svg'
import Objects from './images/objects.svg'

import 'materialize-css' // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import './style.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <QuickFacts />
        <hr />
        <div className="transmission">
          <div>
            <img src={Objects} alt="" />
            <h6>Contaminated Objects and Substances</h6>
          </div>
          <div>
            <img src={AirTramission} alt="" />
            <h6>Air Transmission of Droplets</h6>
          </div>
          <div>
            <img src={Human2Human} alt="" />
            <h6>Transmission Among Humans</h6>
          </div>
        </div>
        <div className="subMain">
          <Awareness />
          <Faq />
        </div>
      </main>
    </div>
  )
}

export default App
