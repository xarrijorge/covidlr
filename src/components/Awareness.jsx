import React, { Fragment } from 'react'

import WashHands from '../images/awarenessIcons/SVG/01.svg'
import FaceMask from '../images/awarenessIcons/SVG/02.svg'
import UseSanitizers from '../images/awarenessIcons/SVG/03.svg'
import SelfQuarantine from '../images/awarenessIcons/SVG/04.svg'
import AvoidContact from '../images/awarenessIcons/SVG/05.svg'
import Virus from '../images/awarenessIcons/SVG/06.svg'

import Faq from '../components/Faq'

export default () => (
  <div className="col-6">
    <div>
      <img src={WashHands} alt="" />
      <p>Wash your hands regularly and thoroughly for at least 20 seconds</p>
    </div>
    <div>
      <img src={FaceMask} alt="" />
      <p>
        a mask cuts the chance of the disease being passed on and can also
        protect others. Make sure you, and the people around you, follow good
        respiratory hygiene. This means covering your mouth and nose with your
        bent elbow or tissue when you cough or sneeze. Then dispose of the used
        tissue immediately.
      </p>
    </div>
    <div>
      <img src={UseSanitizers} alt="" />
      <p>
        Use alcohol-based hand rub or wipes. Using alcohol-based products kill
        viruses that may be on your hands
      </p>
    </div>
    <div>
      <img src={SelfQuarantine} alt="" />
      <p>Wash your hands regularly and thoroughly for at least 20 seconds</p>
    </div>
    <div>
      <img src={WashHands} alt="" />
      <p>Wash your hands regularly and thoroughly for at least 20 seconds</p>
    </div>
    <Faq />
  </div>
)
