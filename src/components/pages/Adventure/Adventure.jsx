import img1 from "../../../assets/Group 167.png"
import img2 from "../../../assets/Subtract (2).svg"
import logo from "../../../assets/Ellipse 46.svg"
const Adventure = () => {
    return (
        <div className="my-20 px-10">
            <div className="flex relative">
                {/* <h2 className="text-center text-2xl font-bold my-10 uppercase border-b-4 md:w-[150px] mx-auto">adventure</h2> */}
                <img className="w-20 absolute md:right-72 right-14 -top-10" src={img2} alt="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  my-20 gap-20  items-center">
                <div className="w-full space-y-5">
                    <div className="flex md:flex-row flex-col md:w-[320px] mx-auto items-center shadow-lg p-3 rounded-lg mb-8 space-y-3">
                        <img className="w-20 h-20" src={img1} alt="" />
                        <div className="ml-3 text-center md:text-start">
                            <h2 className="font-bold">Jenny Wilson</h2>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:w-[320px] mx-auto items-center shadow-lg p-3 rounded-lg mb-8 space-y-3">
                        <img className="w-20 h-20" src={img1} alt="" />
                        <div className="ml-3 text-center md:text-start">
                            <h2 className="font-bold">Jenny Wilson</h2>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col md:w-[320px] mx-auto  items-center shadow-lg p-3 rounded-lg mb-8 space-y-3">
                        <img className="w-20 h-20" src={img1} alt="" />
                        <div className="ml-3 text-center md:text-start">
                            <h2 className="font-bold">Jenny Wilson</h2>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing...</p>
                        </div>
                    </div>
                </div>
                <div className="px-6 relative">
                    <img className="w-10 absolute md:-left-16 -left-5 -top-10" src={logo} alt="" />
                    <h2 className="text-2xl font-bold mb-2">
                        Tropical Adventure <br />
                        <span>for Students.</span>
                    </h2>
                    <p className="text-lg font-semibold">Student Tropical Vacation: Relax and Recharge</p>
                    <ul className="space-y-3">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>
                    <button className="bg-orange-500 my-16 text-white rounded-full px-5 py-2">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Adventure;