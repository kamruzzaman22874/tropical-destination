
import bannerImg from "../../../assets/Group 171.png"
import logo from "../../../assets/Ellipse 46.svg"
import logo1 from "../../../assets/Subtract.svg"
import logo2 from "../../../assets/Ellipse 49.svg"
import logo3 from "../../../assets/Ellipse 48.svg"
import logo4 from "../../../assets/Ellipse 47.svg"

const Banner = () => {
    return (
        <header>
            <div className="md:flex items-center py-20  justify-between px-20 bg-[#F8F1D340]">
                <div className="space-y-10 relative">
                    <img className="w-10" src={logo} alt="" />
                    <p className="text-lg font-semibold text-[#1F2027]">Discover the beauty of the tropics</p>
                    <h1 className="text-5xl text-[#1F2027] font-bold">Tropical <br />           Destinations <br />
                        <span className="text-4xl font-bold">For Student</span>
                    </h1>

                    <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer <br /> rutrum nisi. A nec nisl vitae. </p>
                    <img className="absolute right-0 bottom-12" src={logo1} alt="" />
                    <button className="bg-orange-500 text-white rounded-full px-5 py-2">Sign up</button>
                    <img className="absolute left-48 w-3" src={logo4} alt="" />

                </div>
                <div className="relative">
                    <img className="absolute md:-left-28 -left-10 top-1/2" src={logo2} alt="" />
                    <img className="absolute top-16" src={logo3} alt="" />
                    <img className="md:w-[400px] md:h-[550px]" src={bannerImg} alt="" />
                    <img className="absolute -bottom-8 right-16" src={logo1} alt="" />
                </div>

            </div>
        </header >

    );
};

export default Banner;