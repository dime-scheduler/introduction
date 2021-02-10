import { FormattedMessage } from 'react-intl'
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
          <h2><FormattedMessage id="contact.title" defaultMessage="Want to get started with Dime.Scheduler?" /></h2>
          <p className="text-intro">
            <FormattedMessage
              id="contact.subtitle"
              defaultMessage="Schedule a free demonstration on our website or get in touch by e-mail or phone!" />
          </p>
          <ul className="description">
            <li>

              <a href="https://www.dimescheduler.com" target="_blank">
                <FontAwesomeIcon icon={faGlobe} /> www.dimescheduler.com</a>
            </li>
            <li>
              <a href="mailto:hello@dimescheduler.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} /> hello@dimescheduler.com</a>
            </li>
            <li>
              <a><FontAwesomeIcon icon={faPhone} /> +32 (0)15 79 65 31</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}