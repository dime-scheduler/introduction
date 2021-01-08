import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import screenshot from "../static/images/ds-screenshot-4.png";


export default function Contact() {
  return (
    <section>
      <div className="card-60">
        <figure>
          <img src={screenshot} alt="Dime.Scheduler" />
        </figure>
        <div className="flex-content">
          <h2>Want to get started with Dime.Scheduler?
              </h2>
          <p className="text-intro">Schedule a free hour-long meeting on our website or get in touch by e-mail or phone!</p>
          <ul className="description">
            <li>
              <FontAwesomeIcon icon={faGlobe} />
              <a href="https://www.dimescheduler.com" target="_blank"> www.dimescheduler.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:dime@dimenics.com" target="_blank"> dime@dimenics.com</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +32 (0)15 79 65 31
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}