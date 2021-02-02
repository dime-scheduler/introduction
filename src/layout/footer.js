
export default function Footer() {
    const slideNumber = parseInt(window.location.href.split("slide=")[1].substring(0, 2) ?? 0);
    const visibility = slideNumber === 1 ? "hidden" : "visible";

    return (
        <footer style={{ visibility: visibility }}>
            <span className="alignleft"><a href="#slide=29" style={{ color: '#abc' }}>Contact</a></span>
            <span className="alignright">
                <a href="http://dimescheduler.com" title="Dime.Scheduler">
                    <img className="image" alt="Dime.Scheduler" />
                </a>
            </span>
        </footer>
    )
}