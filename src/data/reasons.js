import { FormattedMessage } from 'react-intl';
import worker from "../static/images/worker.jpg";
import planning from "../static/images/planning.jpg";
import professional from '../static/images/professional.jpg';
import workforce from '../static/images/workforce.png';
import gavel from '../static/images/gavel.jpg';
import holiday from '../static/images/holiday.jpg';
import search from '../static/images/search.jpg';

export default [{
    title: <FormattedMessage id="reasons.reason1.header" defaultMessage="Maximize your workforce's capacity" />,
    content: <FormattedMessage
        id="reasons.reason1.content"
        defaultMessage='Optimize the usage of your people and equipment with better time management and grow your business while you reduce overhead costs.' />,
    bgImage: worker,
    position: 'left'
}, {
    title: <FormattedMessage id="reasons.reason2.header" defaultMessage="Get the competitive edge" />,
    content: <FormattedMessage
        id="reasons.reason2.content"
        defaultMessage="Get ahead of the competition by responding more quickly to your customer's inquiries. Every minute counts in an increasingly competitive world. The ability to consistently deliver, even in difficult circumstances, is what sets you apart." />,
    bgImage: planning,
    position: 'right'
}, {
    title: <FormattedMessage id="reasons.reason3.header" defaultMessage="Comply with regulations" />,
    content: <FormattedMessage
        id="reasons.reason3.content"
        defaultMessage='Comply with all applicable laws and regulations such as maximum work hours and minimum rest requirements. Honor labor union contracts and individual employee agreements and preferences. Minimize your legal exposure by assigning qualified resources to risky and complicated jobs.' />,
    bgImage: gavel,
    position: 'left'
}, {
    title: <FormattedMessage id="reasons.reason4.header" defaultMessage="Make decisions with confidence" />,
    content: <FormattedMessage
        id="reasons.reason4.content"
        defaultMessage='With an up to date and complete overview of your resources and tasks, you can make effective and optimal decisions in a heartbeat with minimal risk.' />,
    bgImage: professional,
    position: 'right'
}, {
    title: <FormattedMessage id="reasons.reason5.header" defaultMessage="Simplify HR" />,
    content: <FormattedMessage
        id="reasons.reason5.content"
        defaultMessage='Make time-off requests and sick days a formality and reschedule without breaking a sweat.' />,
    bgImage: holiday,
    position: 'left'
}, {
    title: <FormattedMessage id="reasons.reason6.header" defaultMessage="Mix and match resources and tasks" />,
    content: <FormattedMessage
        id="reasons.reason6.content"
        defaultMessage='There is no room for compromise when it comes to customer service. Set requirements on your work orders and find the best resource for the job with the right qualifications, skills, location, etc.' />,
    bgImage: search,
    position: 'right'
}, {
    title: <FormattedMessage id="reasons.reason7.header" defaultMessage="Keep your people happy" />,
    content: <FormattedMessage
        id="reasons.reason7.content"
        defaultMessage='With a good and efficient schedule, you can minimize travel time, overtime and maximize employee satisfaction by letting your people do what they do best. A lower employee turnover is your reward.' />,
    bgImage: workforce,
    position: 'left'
}
];