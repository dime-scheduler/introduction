import { FormattedMessage } from 'react-intl';

import imgPlanningBoard from "../static/images/ds-screenshot-1.png";
import capacity from "../static/images/ds-screenshot-7.png";
import gantt from "../static/images/ds-screenshot-10.png";
import personalize from "../static/images/ds-screenshot-8.png";
import map from "../static/images/ds-screenshot-9.png";
import resourceFilters from "../static/images/ds-screenshot-11.png";
import exchange from "../static/images/ds-screenshot-12.png";

export default [
    {
        title: <FormattedMessage id="tour.highlight1.title" defaultMessage="Powerful and real-time planning board" />,
        intro: <FormattedMessage id="tour.highlight1.subtitle" defaultMessage="Pan all of your tasks in a single view" />,
        body: <FormattedMessage id="tour.highlight1.text" defaultMessage={`
        Get instant updates from your co-workers and from changes in back office systems such as Microsoft Dynamics 365 Business Central and Exchange, without ever leaving Dime.Scheduler. 
        Any changes you make are instantly processed by the connected back office systems.`} />,
        img: imgPlanningBoard,
        alignContentLeft: true
    }, {

        title: <FormattedMessage id="tour.highlight2.title" defaultMessage="Project planning" />,
        intro: <FormattedMessage id="tour.highlight2.subtitle" defaultMessage="Manage your projects with the integrated Gantt chart" />,
        body: <FormattedMessage id="tour.highlight2.text" defaultMessage="Plan your projects with the trustee Gantt chart and define dependencies, constraints and milestones for your tasks. Its connection with your back office systems makes painstaking work such as billing and timesheet administration a doddle." />,
        img: gantt,
        alignContentLeft: false
    }, {

        title: <FormattedMessage id="tour.highlight3.title" defaultMessage="Capacity reporting" />,
        intro: <FormattedMessage id="tour.highlight3.subtitle" defaultMessage="Manage the capacity of your resources with the pivot grid" />,
        body: <FormattedMessage id="tour.highlight3.text" defaultMessage="Dime.Scheduler allows you to define the meaning of capacity. It can be whatever you want it to be. Whether it is time, loading volume trucks, seats in a van, Dime.Scheduler's flexible pivot grid and capacity mechanism enables you to report on the relevant capacity parameters." />,
        img: capacity,
        alignContentLeft: true
    }, {

        title: <FormattedMessage id="tour.highlight4.title" defaultMessage="Smart resource filtering" />,
        intro: <FormattedMessage id="tour.highlight4.subtitle" defaultMessage="Find the right resource for your tasks" />,
        body: <FormattedMessage id="tour.highlight4.text" defaultMessage="Define requirements for your tasks such as skills, languages, certifications, region, and match resources that are eligible to carry out those tasks. " />,
        img: resourceFilters,
        alignContentLeft: false
    }, {
        title: <FormattedMessage id="tour.highlight5.title" defaultMessage="Visualize your resources and tasks on the map" />,
        intro: <FormattedMessage id="tour.highlight5.subtitle" defaultMessage="Locate your work and resources and create an efficient schedule accordingly" />,
        body: <FormattedMessage id="tour.highlight5.text" defaultMessage="Assemble trips for your fleet, find a qualified technician that is nearby the site of a customer for an urgent case, whatever your business case is, the connected map is almost a guarantee to help improve your resources' schedules." />,
        img: map,
        alignContentLeft: true
    }, {

        title: <FormattedMessage id="tour.highlight6.title" defaultMessage="Integrated with your technological landscape" />,
        intro: <FormattedMessage id="tour.highlight6.subtitle" defaultMessage="Connect to any application and equip your workforce a seamless and integrated toolkit." />,
        body: <FormattedMessage id="tour.highlight6.text" defaultMessage="Dime.Scheduler's flexible architecture allows for extensive customization and integration with systems such as Microsoft Exchange, the Microsoft Dynamics product suite, Office 365, mobile devices such as GPS trackers, and more." />,
        img: exchange,
        alignContentLeft: false
    }, {

        title: <FormattedMessage id="tour.highlight7.title" defaultMessage="Personalized" />,
        intro: <FormattedMessage id="tour.highlight7.subtitle" defaultMessage="You tell Dime.Scheduler what to do, not the other way around" />,
        body: <FormattedMessage id="tour.highlight7.text" defaultMessage="You are in total control. Choose what components you want see in the planning with user profiles. Select which data you want to see with layout filters, sorting, grouping and column selection. Configure and customize the application to automate your planning processes." />,
        img: personalize,
        alignContentLeft: true
    }
]