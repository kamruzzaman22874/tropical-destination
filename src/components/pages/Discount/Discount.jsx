import image from "../../../assets/Mask group.png"
import logo from "../../../assets/Ellipse 46.svg"
import logo2 from "../../../assets/Ellipse 49.svg"
import logo3 from "../../../assets/Ellipse 54.svg"
import logo1 from "../../../assets/Subtract (3).svg"
import img2 from "../../../assets/Subtract (2).svg"
const Discount = () => {
    return (
        <div className="md:px-20 px-24 my-32 relative">
            {/* <h2>Discount</h2> */}
            <img className="absolute w-8 md:left-[450px] right-[16rem] -top-8" src={logo1} alt="" />
            <div className="md:flex relative  justify-center md:gap-20 items-center">
                <img className="w-5 absolute md:left-16 lg:left-44  md:top-0 -top-10" src={logo} alt="" />
                <div className="md:ml-16 my-10 relative ">
                    <p>Get 20% off for student</p>
                    <img className="absolute -right-5 w-4" src={logo2} alt="" />
                    <h2><span className="text-3xl font-bold">Student discounts available.</span> <br />
                        <span className="text-xl font-bold">Get ready for some fun in the sun!</span>
                    </h2>

                    <ul className="space-y-3">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <button className="bg-orange-500 my-10 text-white rounded-full px-5 py-2">Explore More</button>
                    <img className="w-2 absolute md:right-16" src={logo3} alt="" />
                </div>
                <div className="flex justify-center relative">
                    <img className="w-[350px] z-10" src={image} alt="" />
                    <img className="w-28 absolute md:-bottom-8 -bottom-5 right-6 text-green-300 md:right-0" src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discount;