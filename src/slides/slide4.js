import reasons from '../data/reasons';

export default function Start() {
    const reasonsList = reasons.map(({ title, text }) => (
        <li>
            <h2>{title}</h2>
            <p>{text}</p>
        </li>
    ));

    return (
        <section id="section-7" className="slide current">
            <div className="wrap size-60">
                <h3>Why<strong> centralized</strong> [planning] solutions are essential</h3>
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