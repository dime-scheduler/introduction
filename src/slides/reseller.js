import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faEnvelope, faFileSignature, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default function Reseller() {
    return (
        <section>
            <div className="wrap">
                <h3>
                    <FormattedMessage id="reseller.title" defaultMessage="Interested in becoming a reseller?" />
                </h3>
                <ul className="flexblock steps">
                    <li>
                        <span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                        <h2>01. <FormattedMessage id="reseller.step1.title" defaultMessage="Contact" /></h2>
                        <p>
                            <FormattedMessage
                                id="reseller.step1.content"
                                defaultMessage="We'll set up a meeting to discuss the product and your requirements." />
                        </p>
                    </li>
                    <li>
                        <div className="process step-2"></div>
                        <span><FontAwesomeIcon icon={faFileSignature}></FontAwesomeIcon></span>
                        <h2>02. <FormattedMessage id="reseller.step2.title" defaultMessage="Sign reseller agreement" /></h2>
                        <p>
                            <FormattedMessage
                                id="reseller.step2.content"
                                defaultMessage="Sign the contract and get access to discounts, free support and discounted internal use." />
                        </p>
                    </li>
                    <li>
                        <div className="process step-3"></div>
                        <span><FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon></span>
                        <h2>03. <FormattedMessage id="reseller.step3.title" defaultMessage="Training" /></h2>
                        <p>
                            <FormattedMessage
                                id="reseller.step3.content"
                                defaultMessage="A two-day training course will get your team up to speed. " />
                        </p>
                    </li>
                    <li>
                        <div className="process step-4"></div>
                        <span><FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon></span>
                        <h2>04. <FormattedMessage id="reseller.step4.title" defaultMessage="Support" /></h2>
                        <p>
                            <FormattedMessage
                                id="reseller.step4.content"
                                defaultMessage="Our support team is at your disposal for any of your questions." />
                        </p>
                    </li>
                </ul>

                <br />
                <p>
                    <FormattedMessage id="reseller.subtitle" defaultMessage="Get in touch with us to discover the benefits you get as a reseller! " />
                </p>
            </div>
        </section>
    )
}