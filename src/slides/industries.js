import industries from '../data/industries';

export default function Industries() {
    const industriesList = industries.map(({ name, faIcon }) => {
        return (
            <li>
                {faIcon}
                {name}
            </li>
        );
    });

    return (
        <section>
            <div className="wrap">
                <h3>Industries</h3>
                <p>Showcasing Dime.Scheduler's versatility</p>
                <ul className="flexblock metrics border">
                    {industriesList}
                </ul>
            </div>
        </section>
    )
}