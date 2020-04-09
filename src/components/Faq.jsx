import React from 'react'
import M from 'materialize-css'

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible')
  var instances = M.Collapsible.init(elems, {})
})

export default () => (
  <div className="faq">
    <h3>Frequently Asked Questions</h3>
    <ul className="collapsible">
      <li>
        <div className="collapsible-header">
          <i className="material-icons">arrow_right</i>What is Corona virus?
        </div>
        <div className="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
      <li>
        <div className="collapsible-header">
          <i className="material-icons">place</i>Second
        </div>
        <div className="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
      <li>
        <div className="collapsible-header">
          <i className="material-icons">whatshot</i>Third
        </div>
        <div className="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </li>
    </ul>
  </div>
)
