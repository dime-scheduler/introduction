import industries from '../data/industries';

export default function Start() {
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