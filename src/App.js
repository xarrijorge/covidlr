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
      <Assessemnt />
      <main className="main">
        <QuickFacts />
        <hr />
        <div className="section2">
          <h3>How it spreads</h3>
          <div className="transmission">
            <div>
              <img src={Objects} alt="" />
              <h5>Contaminated Objects</h5>
              <p>
                Currently, your respondents have to complete your typeform in
                one sitting. ... The reason is that the action of clicking on
                the “Submit” button confirms that they consent to share{' '}
              </p>
            </div>
            <div>
              <img src={AirTramission} alt="" />
              <h5>Air Transmission of Droplets</h5>
              <p>
                Currently, your respondents have to complete your typeform in
                one sitting. ... The reason is that the action of clicking on
                the “Submit” button confirms that they consent to share{' '}
              </p>
            </div>
            <div>
              <img src={Human2Human} alt="" />
              <h5>Transmission Among Humans</h5>
              <p>
                Currently, your respondents have to complete your typeform in
                one sitting. ... The reason is that the action of clicking on
                the “Submit” button confirms that they consent to share{' '}
              </p>
            </div>
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
