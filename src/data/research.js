import { FormattedMessage } from 'react-intl';

import ss1 from "../static/images/person2.png";
import ss2 from "../static/images/worker-2.png";
import ss3 from "../static/images/person3.png";

export default [
    {
        gradient: 'r',
        imageAlign: 'right',
        image: ss2,
        text: <FormattedMessage id="research.quote1" defaultMessage='Employee turnover is 174% more likely without real-time scheduling capabilities.' />
    },
    {
        gradient: 'h',
        imageAlign: 'left',
        image: ss1,
        text: <FormattedMessage id="research.quote2" defaultMessage='Employees with the ability to manage schedules in real time are 6X more satisfied than those without.' />
    },
    {
        gradient: 'v',
        imageAlign: 'right',
        image: ss3,
        text: <FormattedMessage id="research.quote3" defaultMessage='Organizations with predictable scheduling are 53% more likely to experience lower turnover than their industry average.' />
    }
]