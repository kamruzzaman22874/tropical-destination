import image from "../../../assets/Mask group.png"
const Discount = () => {
    return (
        <div className="md:px-20 px-24 my-20">
            {/* <h2>Discount</h2> */}
            <div className="md:flex  justify-center md:gap-20 items-center">
                <div className="md:ml-16">
                    <p>Get 20% off for student</p>
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
                    <button className="bg-orange-500 my-16 text-white rounded-full px-5 py-2">Explore More</button>
                </div>
                <div className="flex justify-center">
                    <img className="w-[350px]" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discount;