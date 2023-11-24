import Adventure from "../Adventure/Adventure";
import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Destination from "../Destination/Destination";
import Discount from "../Discount/Discount";
import SpecialDiscount from "../SpecialDiscount/SpecialDiscount";
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
            <SpecialDiscount />
        </div>
    );
};

export default Home;