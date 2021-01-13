import ds from "../static/images/ds-light.png";

export default function Footer() {
    return (
        <footer>
            <span className="alignleft">#preview</span>
            <span className="alignright">
                <a href="http://dimescheduler.com" title="Dime.Scheduler">
                    <img src={ds} alt="Dime.Scheduler" />
                </a>
            </span>
        </footer>)
}