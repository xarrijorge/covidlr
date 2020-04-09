import React from 'react'

import QuickFacts from '../components/QuickFacts'
import StayIn from '../images/staying_in_i80u.svg'
export default () => (
  <div className="header">
    <div className="heroText">
      <h1>
        Let's work together to stop the spread of
        <span className="covid">COVID-19</span>
      </h1>
      <h4>Stay home, stay safe.</h4>
      <h4>Keep yourself quarantine</h4>
    </div>
    <div className="heroImg">
      <img src={StayIn} alt="" />
    </div>
    <QuickFacts />
  </div>
)
