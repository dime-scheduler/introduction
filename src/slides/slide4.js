export default function Start() {

    const reasons = [
        { title: 'Limit overtime', text: "Manage your workforce's time" },
        { title: 'Last-minute changes', text: 'Respond quickly and easily to urgent interventions. ' },
        { title: 'Duplicate bookings', text: "Don't waste your people's time with duplicate appointments" },
        { title: 'Excessive status meetings', text: 'Reduce endless status meetings with a single version of the truth that is easy to access.' }
    ];

    const reasonsList = reasons.map(({ title, text }) => (
        <li>
            <h2>{title}</h2>
            <p>{text}</p>
        </li>
    ));

    return (
        <section id="section-7" className="slide current">
            <div className="wrap size-60">
                <h3>Why<strong> centralized</strong> [planning] solutions are essential.</h3>
                <hr />
                <div className="bg-white shadow">
                    <ul className="flexblock reasons">
                        {reasonsList}
                    </ul>
                </div>
            </div>
        </section>
    )
}