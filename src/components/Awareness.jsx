import React, { Fragment } from 'react'

import WashHands from '../images/awarenessIcons/SVG/01.svg'
import FaceMask from '../images/awarenessIcons/SVG/02.svg'
import UseSanitizers from '../images/awarenessIcons/SVG/03.svg'
import SelfQuarantine from '../images/awarenessIcons/SVG/04.svg'
import AvoidContact from '../images/awarenessIcons/SVG/05.svg'
import Virus from '../images/awarenessIcons/SVG/06.svg'

export default () => (
  <div className="awareness">
    {/* <i src={Virus} alt="" /> */}
    <div className="card">
      <h3>Prevent COVID-19</h3>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Virus} alt="handwashing" />
      </div>
    </div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={WashHands} alt="handwashing" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Wash Your Hands<i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Wash Hands<i className="material-icons right">close</i>
        </span>
        <h4>
          Wash your hands regularly and thoroughly for at least 20 seconds
        </h4>
      </div>
    </div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" alt="sanitize hands" src={UseSanitizers} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Sanitize Regularly
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Use Sanizating Gels<i className="material-icons right">close</i>
        </span>
        <h6>
          Use alcohol-based hand rub or wipes. Using alcohol-based products kill
          viruses that may be on your hands
        </h6>
      </div>
    </div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={SelfQuarantine} alt="handwashing" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Self Quarantine<i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Self Quarantine<i className="material-icons right">close</i>
        </span>
        <h4>
          Stay at home if you begin to feel unwell, even with mild symptoms such
          as headache and slight runny nose, until you recover.Self-quarantine
          for 14 days.
        </h4>
      </div>
    </div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={FaceMask} alt="handwashing" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Facemasks Helps<i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Facemasks Helps<i className="material-icons right">close</i>
        </span>
        <h4>
          a mask cuts the chance of the disease being passed on and can also
          protect others. Make sure you, and the people around you, follow good
          respiratory hygiene.
        </h4>
      </div>
    </div>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={AvoidContact} alt="handwashing" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          Avoid Contact<i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Avoid Contact<i className="material-icons right">close</i>
        </span>
        <h4>
          Maintain at least 1 metre (3 feet) distance between yourself and
          anyone. Avoid Shaking hands and adhere to the social distancing rule.
        </h4>
      </div>
    </div>
    {/* End of box div */}
  </div>
)
