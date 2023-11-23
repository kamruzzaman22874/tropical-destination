import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;