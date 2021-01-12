import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faUsers, faUserFriends, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function Stats() {
    return (
        <section>
            <div className="wrap">
                <div className="content-left">
                    <h2>Looking for a integrated planning solution that can be tailored to your needs?</h2>
                </div>
                <div className="content-left">
                    <p>Dime.Scheduler has a proven track record with a vast network of great partners and inspiring customers who trust us for managing their day-to-day business.</p>
                </div>
                <ul className="flexblock metrics">
                    <li>
                        <FontAwesomeIcon icon={faHandshake} />
                    More than 60 resellers
                  </li>
                    <li>
                        <FontAwesomeIcon icon={faGlobe} />
                  Active in more than 20 countries
              </li>
                    <li>
                        <FontAwesomeIcon icon={faUsers} />
                More than 20.000 planned resources
              </li>
                    <li>
                        <FontAwesomeIcon icon={faUserFriends} />
                      More than 500 planners
              </li>
                </ul>
            </div>
        </section>
    )
}