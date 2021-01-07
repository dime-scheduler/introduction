import worker from "../static/images/worker.jpg";
import planning from "../static/images/planning.jpg";
import professional from '../static/images/professional.jpg';
import meeting from '../static/images/meeting.jfif';

export default function App() {
    return (
        <section>
              <span class="background" style={{ backgroundImage: `url(${meeting})` }}></span>
              <div class="wrap">
                <div class="content-left bg-trans-dark fadeInDown">
                  <h2><strong>Excessive status meetings</strong></h2>
                  <p>Reduce endless status meetings with a single version of the truth that is easy to access.</p>
                </div>
              </div>
            </section>
    )
}