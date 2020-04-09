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
          <i className="material-icons">control_point</i>What is Corona virus?
        </div>
        <div className="collapsible-body">
          <span>
            Coronaviruses are a large family of viruses which may cause illness
            in animals or humans. In humans, several coronaviruses are known to
            cause respiratory infections ranging from the common cold to more
            severe diseases such as Middle East Respiratory Syndrome (MERS) and
            Severe Acute Respiratory Syndrome (SARS). The most recently
            discovered coronavirus causes coronavirus disease COVID-19.
          </span>
        </div>
      </li>
      {/* /////////////// */}
      <li>
        <div className="collapsible-header">
          <i className="material-icons">control_point</i>What is COVID-19?
        </div>
        <div className="collapsible-body">
          <span>
            COVID-19 is the infectious disease caused by the most recently
            discovered coronavirus. This new virus and disease were unknown
            before the outbreak began in Wuhan, China, in December 2019.
          </span>
        </div>
      </li>
      {/* /////////////// */}
      <li>
        <div className="collapsible-header">
          <i className="material-icons">control_point</i>What are the symptoms
          of COVID-19?
        </div>
        <div className="collapsible-body">
          <span>
            The most common symptoms of COVID-19 are fever, tiredness, and dry
            cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild
            and begin gradually. Some people become infected but don’t develop
            any symptoms and don't feel unwell. Most people (about 80%) recover
            from the disease without needing special treatment. Around 1 out of
            every 6 people who gets COVID-19 becomes seriously ill and develops
            difficulty breathing. Older people, and those with underlying
            medical problems like high blood pressure, heart problems or
            diabetes, are more likely to develop serious illness. People with
            fever, cough and difficulty breathing should seek medical attention.
          </span>
        </div>
      </li>
      {/* /////////////// */}
      <li>
        <div className="collapsible-header">
          <i className="material-icons">control_point</i>How does COVID-19
          spread?
        </div>
        <div className="collapsible-body">
          <span>
            People can catch COVID-19 from others who have the virus. The
            disease can spread from person to person through small droplets from
            the nose or mouth which are spread when a person with COVID-19
            coughs or exhales. These droplets land on objects and surfaces
            around the person. Other people then catch COVID-19 by touching
            these objects or surfaces, then touching their eyes, nose or mouth.
            People can also catch COVID-19 if they breathe in droplets from a
            person with COVID-19 who coughs out or exhales droplets. This is why
            it is important to stay more than 1 meter (3 feet) away from a
            person who is sick. WHO is assessing ongoing research on the ways
            COVID-19 is spread and will continue to share updated findings.
          </span>
        </div>
      </li>
      {/* /////////////// */}
      <li>
        <div className="collapsible-header">
          <i className="material-icons">control_point</i>Are antibiotics
          effective in preventing or treating the COVID-19?
        </div>
        <div className="collapsible-body">
          <span>
            No. Antibiotics do not work against viruses, they only work on
            bacterial infections. COVID-19 is caused by a virus, so antibiotics
            do not work. Antibiotics should not be used as a means of prevention
            or treatment of COVID-19. They should only be used as directed by a
            physician to treat a bacterial infection.
          </span>
        </div>
      </li>
      {/* /////////////// */}
      <li>
        <div className="collapsible-header">
          <i className="material-icons">control_point</i>Is there a vaccine,
          drug or treatment for COVID-19?
        </div>
        <div className="collapsible-body">
          <span>
            Not yet. To date, there is no vaccine and no specific antiviral
            medicine to prevent or treat COVID-2019. However, those affected
            should receive care to relieve symptoms. People with serious illness
            should be hospitalized. Most patients recover thanks to supportive
            care. Possible vaccines and some specific drug treatments are under
            investigation. They are being tested through clinical trials. WHO is
            coordinating efforts to develop vaccines and medicines to prevent
            and treat COVID-19. The most effective ways to protect yourself and
            others against COVID-19 are to frequently clean your hands, cover
            your cough with the bend of elbow or tissue, and maintain a distance
            of at least 1 meter (3 feet) from people who are coughing or
            sneezing.
          </span>
        </div>
      </li>
      {/* /////////////// */}
    </ul>
  </div>
)
