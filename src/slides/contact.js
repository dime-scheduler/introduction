import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section>
      <div className="wrap">
        <div className="aligncenter">
          <h1 >Want to get started with Dime.Scheduler?</h1>
          <p>Schedule a free hour-long meeting on our website or get in touch by e-mail or phone! </p>
          <div>
            <p></p>
          </div>
        </div>
        <ul className="flexblock features">
          <li>
            <div>
              <h2> <FontAwesomeIcon icon={faGlobe} /> Website</h2>
              <a href="https://www.dimescheduler.com" target="_blank">www.dimescheduler.com</a>
            </div>
          </li>
          <li>
            <div>
              <h2> <FontAwesomeIcon icon={faEnvelope} /> E-mail</h2>
              dime@dimenics.com
            </div>
          </li>
          <li>
            <div>
              <h2> <FontAwesomeIcon icon={faPhone} /> Phone</h2>
              +32 (0)15 79 65 31
              </div>
          </li>
        </ul>
      </div>
    </section>
  )
}