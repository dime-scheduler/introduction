import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faEnvelope, faFileSignature, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default function Reseller() {
    return (
        <section>
            <div className="wrap">
                <h3>Want to become a reseller?</h3>
                <ul className="flexblock steps">
                    <li>
                        <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                        <h2>01. Contact</h2>
                        <p>We'll set up a meeting to discuss the product and your requirements.</p>
                    </li>
                    <li>
                        <div className="process step-2"></div>
                        <span><FontAwesomeIcon icon={faFileSignature}></FontAwesomeIcon></span>
                        <h2>02. Sign reseller agreement</h2>
                        <p>Sign the contract and get access to discounts, free support and discounted internal use.</p>
                    </li>
                    <li>
                        <div className="process step-3"></div>
                        <span><FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon></span>
                        <h2>03. Training</h2>
                        <p>A two-day training course will get your team up to speed.</p>
                    </li>
                    <li>
                        <div className="process step-4"></div>
                        <span><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></span>
                        <h2>04. Support</h2>
                        <p>Our support team is at your disposal for any of your questions.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}