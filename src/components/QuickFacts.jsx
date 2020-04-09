import React from 'react'

export default () => (
  <aside className="quickFacts">
    <h4 className=" title">
      Quick <br /> Facts
    </h4>
    <div className="stats">
      <div className="stat confirmed">
        <h4 className="count">1,517,196</h4> <h6>Total Confirmed Cases</h6>
      </div>
      <div className="stat deceased">
        <h4 className="count">88,433</h4>
        <h6>Total Deceased</h6>
      </div>
      <div className="stat recovered">
        <h4 className="count">39,062</h4> <h6>Total Recovered</h6>
      </div>
    </div>
  </aside>
)
