import reasons from '../data/reasons';

function Reason({ title, content, bgImage, position }) {
    const headerClass = `content-${position} bg-trans-dark fadeInDown`;
    return (
        <section className="bg-primary">
            <span className="background" style={{ backgroundImage: `url(${bgImage})` }}></span>
            <div className="wrap">
                <div className={headerClass}>
                    <h2><strong>{title}</strong></h2>
                    <p>{content}</p>
                </div>
            </div>
        </section>
    )
}

const reasonsList = reasons.map(({ title, content, bgImage, position }, i) =>
    (<Reason key={i} title={title} content={content} bgImage={bgImage} position={position} />));

export default reasonsList;