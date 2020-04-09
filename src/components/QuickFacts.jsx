import React from 'react'

export default () => (
  <aside className="quickFacts">
    <h4 className="">Quick Facts</h4>
    <div className="stats">
      <div className="stat confirmedCases">
        <h>1,517,196</h> <h6>Total Confirmed Cases</h6>
      </div>
      <div className="stat deceased">
        <h5>88,433</h5>
        <h6>Total Deceased</h6>
      </div>
      <div className="stat recovered">
        <h5>39,062</h5> <h6>Total Recovered</h6>
      </div>
    </div>
  </aside>
)
