import { FormattedMessage } from 'react-intl';

import ss1 from "../static/images/people/person1.png";
import ss2 from "../static/images/people/person2.png";
import ss3 from "../static/images/people/person3.png";
import ss4 from "../static/images/people/person4.png";
import ss5 from "../static/images/people/person5.png";
import ss6 from "../static/images/people/person6.png";

export default [
    {
        gradient: 'r',
        imageAlign: 'right',
        image: ss1,
        text: <FormattedMessage id="research.quote1" defaultMessage='Employee turnover is 174% more likely without real-time scheduling capabilities.' />
    },
    {
        gradient: 'h',
        imageAlign: 'left',
        image: ss2,
        text: <FormattedMessage id="research.quote2" defaultMessage='Employees with the ability to manage schedules in real time are 6 times more satisfied than those without.' />
    },
    {
        gradient: 'v',
        imageAlign: 'right',
        image: ss3,
        text: <FormattedMessage id="research.quote3" defaultMessage='Organizations with predictable scheduling are 53% more likely to experience lower turnover than their industry average.' />
    },
    {
        gradient: 'r',
        imageAlign: 'left',
        image: ss5,
        text: <FormattedMessage id="research.quote4" defaultMessage='Nearly 1 in 5 workers believe their schedule negatively impacts their health.' />
    },
    {
        gradient: 'h',
        imageAlign: 'right',
        image: ss4,
        text: <FormattedMessage id="research.quote5" defaultMessage='41% would choose a different work schedule if they could.' />
    },
    {
        gradient: 'r',
        imageAlign: 'left',
        image: ss6,
        text: <FormattedMessage id="research.quote6" defaultMessage='On average you waste one hour per week due to unplanned interruptions, resulting in a yearly cost of $90 000 per person.' />
    }
]