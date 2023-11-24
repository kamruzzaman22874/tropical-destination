import bannerImg from "../../../assets/Group 171.png"
const Banner = () => {
    return (
        <header>
            <div className="md:flex items-center py-5 justify-between px-20 bg-[#F8F1D340]">
                <div className="space-y-3">
                    <p className="text-lg font-semibold text-[#1F2027]">Discover the beauty of the tropics</p>
                    <h1 className="text-5xl text-[#1F2027] font-bold">Tropical <br />           Destinations <br />
                        <span className="text-4xl font-bold">For Student</span>
                    </h1>

                    <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer <br /> rutrum nisi. A nec nisl vitae. </p>
                    <button className="bg-orange-500 text-white rounded-full px-5 py-2">Sign up</button>
                </div>
                <div className="">
                    <img className="md:w-[400px] md:h-[550px]" src={bannerImg} alt="" />
                </div>

            </div>
        </header>

    );
};

export default Banner;