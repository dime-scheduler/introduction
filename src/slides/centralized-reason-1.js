import worker from "../static/images/worker.jpg";
import planning from "../static/images/planning.jpg";
import professional from '../static/images/professional.jpg';
import meeting from '../static/images/meeting.jfif';

export default function App() {
    return (
        <section>
            <span class="background" style={{ backgroundImage: `url(${worker})` }}></span>
            <div class="wrap">
                <div class="content-left bg-trans-dark fadeInUp">
                    <h2><strong>Reduce costly overtime</strong></h2>
                    <p>Manage your people and equipment more efficiently and maximize your workforce's capacity.</p>
                </div>
            </div>
        </section>
    )
}