import ds from "../static/images/ds-screenshot-2.png";
import ImageCard from '../components/imageCard';

export default function WhyCentralizedPlanning() {
    return (
        <section className="bg-primary">
            <div className="wrap size-70">
                <ImageCard image={ds} imageId="ds-screenshot" />
            </div>
        </section>
    )
}