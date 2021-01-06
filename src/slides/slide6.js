export default function Start() {

    const industries = [
        { name: 'Field service', faIcon: 'fa-bar-chart' },
        { name: 'Transportation', faIcon: 'fa-cog' },
        { name: 'Accommodation & food', faIcon: 'fa-cog' },
        { name: 'Utilities', faIcon: 'fa-cog' },
        { name: 'Construction', faIcon: 'fa-cog' },
        { name: 'Educational services', faIcon: 'fa-cog' },
        { name: 'Manufacturing', faIcon: 'fa-cog' },
        { name: 'Agriculture', faIcon: 'fa-cog' },
        { name: 'Rental', faIcon: 'fa-cog' },
        { name: 'Professional services', faIcon: 'fa-cog' },
        { name: 'Health care', faIcon: 'fa-cog' },
        { name: 'and many more', faIcon: 'fa-cog' }
    ];

    const industriesList = industries.map(({ name, faIcon }) => {
        const linkHref = `#${faIcon}`;
        return (
            <li>
                <h2>
                    <svg class={faIcon}>
                        <use xlinkHref={linkHref}></use>
                    </svg>
                    {name}
                </h2>
            </li >
        );
    });

    return (
        <section>
            <div class="wrap">
                <h3>Industries</h3>
                <p>Showcasing Dime.Scheduler's versatility</p>
                <ul class="flexblock features">
                    {industriesList}
                </ul>
            </div>
        </section>
    )
}