import { FormattedMessage } from 'react-intl';
import customFieldsImg from '../static/images/features/customfields.svg';
import multilanguageImg from '../static/images/features/multilanguage.svg';
import alertsImg from '../static/images/features/alerts.svg';
import tasksImg from '../static/images/features/tasks.svg';
import cloudImg from '../static/images/features/cloud.svg';
import securityImg from '../static/images/features/security.svg';
import integrateImg from '../static/images/features/integrate.svg';
import filterImg from '../static/images/features/filter.svg';
import calendarImg from '../static/images/features/calendars.svg';
import connectedImg from '../static/images/features/connected.svg';
import planningBoardsImg from '../static/images/features/planningboards.svg';
import realtimeImg from '../static/images/features/realtime.svg';

const style = {
    width: "50px"
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        name: <FormattedMessage id="morefeatures.feature1" defaultMessage='Real-time and bi-directional message flow' />,
        icon: <img src={realtimeImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature2" defaultMessage='Tasks and resources can be anything' />,
        icon: <img src={tasksImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature3" defaultMessage='Connect to multiple systems' />,
        icon: <img src={connectedImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature4" defaultMessage='Multi-language' />,
        icon: <img src={multilanguageImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature5" defaultMessage='Custom fields' />,
        icon: <img src={customFieldsImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature6" defaultMessage='Multiple planning boards' />,
        icon: <img src={planningBoardsImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature7" defaultMessage='Calendars' />,
        icon: <img src={calendarImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature8" defaultMessage='Grouping, sorting, filtering' />,
        icon: <img src={filterImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature9" defaultMessage='Host on-premise or in the cloud' />,
        icon: <img src={cloudImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature10" defaultMessage='Alerts and notifications based on business rules in back-end​' />,
        icon: <img src={alertsImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature11" defaultMessage='Data-driven setup and security' />,
        icon: <img src={securityImg} style={style} alt="Dime.Scheduler Feature" />
    },
    {
        name: <FormattedMessage id="morefeatures.feature12" defaultMessage='Easy integration with Fast Track for Business Central' />,
        icon: <img src={integrateImg} style={style} alt="Dime.Scheduler Feature" />
    }
];