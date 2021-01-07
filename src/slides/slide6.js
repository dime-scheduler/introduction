import industries from '../data/industries';

export default function Start() {
    const industriesList = industries.map(({ name, faIcon }) => {
        return (
            <li>
                {faIcon}
                {name}
            </li>
        );
    });

    return (
        <section className="bg-primary">
            <div class="wrap">
                <h3>Industries</h3>
                <p>Showcasing Dime.Scheduler's versatility</p>
                <ul class="flexblock metrics border">
                    {industriesList}
                </ul>
            </div>
        </section>
    )
}