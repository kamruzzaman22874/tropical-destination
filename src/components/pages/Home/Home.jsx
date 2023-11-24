import Adventure from "../Adventure/Adventure";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Destination from "../Destination/Destination";
import Discount from "../Discount/Discount";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Adventure />
            <Destination />
            <Discount />
            <Booking />
            <Testimonials />
        </div>
    );
};

export default Home;