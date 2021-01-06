export default function Start() {

    const features = [
        { name: 'Drag & drop planning', faIcon: 'fa-bar-chart' },
        { name: 'Gantt chart project planning', faIcon: 'fa-square' },
        { name: 'Integrated map', faIcon: 'fa-cog' },
        { name: 'Powerful resource filters', faIcon: 'fa-cog' },
        { name: 'Capacity overview', faIcon: 'fa-cog' },
        { name: 'Calendars', faIcon: 'fa-cog' },
        { name: 'Connect to Microsoft Exchange', faIcon: 'fa-cog' },
        { name: 'and many more', faIcon: 'fa-cog' },
    ];

    const featuresList = features.map(({ name, faIcon }) => {
        const linkHref = `#${faIcon}`;
        return (
            <li>
                <svg class={faIcon}>
                    <use xlinkHref={linkHref}></use>
                </svg>
                <h2>{name}</h2>
                Multipurpose: services, features, specs...
            </li>
        );
    });

    return (
        <section>
            <div class="wrap">
                <div class="content-center">
                    <h2 class="text-landing">Key features</h2>
                    <p>Among many others, here is a selection of key features:</p>
                </div>

                <ul class="flexblock">
                    {featuresList}
                </ul >
            </div >
        </section >
    )
}