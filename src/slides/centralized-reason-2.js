import worker from "../static/images/worker.jpg";
import planning from "../static/images/planning.jpg";
import professional from '../static/images/professional.jpg';
import meeting from '../static/images/meeting.jfif';

export default function App() {
    return (
        <section>
              <span class="background" style={{ backgroundImage: `url(${planning})` }}></span>
              <div class="wrap">
                <div class="content-right bg-trans-dark fadeInDown">
                  <h2><strong>Be confident in last-minute adjustments</strong></h2>
                  <p>With a single version of the truth, you have an instant and complete overview that allows you make effective and optimal decisions.</p>
                </div>
              </div>
            </section>
    )
}