import { useState } from "react";
import img1 from "../../../assets/Group 167.png"
import { FaPlus, FaMinus } from "react-icons/fa6";

const Booking = () => {
    const [increase, setIncrease] = useState(0)
    const [star, setStar] = useState(0)
    return (
        <div className="grid md:grid-cols-2 gap-10 justify-center items-center w-full px-10">
            <div className="h-full flex justify-center">
                <img className="md:w-[400px] w-[400px]" src={img1} alt="" />
            </div>
            <div className="shadow-lg rounded-lg">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Book Now</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">CITY</span>
                        </label>
                        <input type="text" placeholder="Please choose your city" className="input input-bordered " />
                    </div>
                    <div className="md:flex gap-3 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text uppercase">Arrival</span>
                            </label>
                            <input type="date" placeholder="password" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text uppercase">Departure</span>
                            </label>
                            <input type="date" placeholder="password" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="md:flex gap-6 w-full">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text uppercase">star</span>
                            </label>
                            <div className="flex h-12 bg-[#F3F3F3] gap-8 items-center rounded-lg shadow-xl">
                                <button className="bg-[#f7dada] rounded h-full w-10 flex justify-center items-center ">
                                    <FaMinus onClick={() => setStar(star - 1)} />
                                </button>
                                <p className="px-3 text-center">{star}</p>
                                <button className="bg-[#f7dada] rounded h-full w-10 flex justify-center items-center ">
                                    <FaPlus onClick={() => setStar(star + 1)} />
                                </button>
                            </div>

                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text uppercase">star</span>
                            </label>
                            <div className="flex h-12 bg-[#F3F3F3] gap-8 items-center rounded-lg shadow-xl">
                                <button className="bg-[#f7dada] rounded h-full w-10 flex justify-center items-center ">
                                    <FaMinus onClick={() => setIncrease(star - 1)} />
                                </button>
                                <p className="px-3 text-center">{increase}</p>
                                <button className="bg-[#f7dada] rounded h-full w-10 flex justify-center items-center ">
                                    <FaPlus onClick={() => setIncrease(star + 1)} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="btn px-10 bg-black text-white uppercase">Book Now</button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Booking;