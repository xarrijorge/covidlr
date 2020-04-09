import React from 'react'

export default () => (
  <aside className="quickFacts">
    <h4 className=" title">
      Quick <br /> Facts
    </h4>
    <div className="stats">
      <div className="stat confirmed">
        <h2 className="count">1,517,196</h2> <h5>Total Confirmed Cases</h5>
      </div>
      <div className="stat deceased">
        <h2 className="count">88,433</h2>
        <h5>Total Deceased</h5>
      </div>
      <div className="stat recovered">
        <h2 className="count">39,062</h2> <h5>Total Recovered</h5>
      </div>
    </div>
  </aside>
)
