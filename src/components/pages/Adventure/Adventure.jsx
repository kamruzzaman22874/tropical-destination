import img1 from "../../../assets/Group 167.png"
const Adventure = () => {
    return (
        <div>
            <h2>This is adventure</h2>

            <div className="flex justify-between px-48 items-center">
                <div>
                    <div className="flex justify-center items-center">
                        <img className="w-20 h-20" src={img1} alt="" />
                        <div>
                            <h2>Jenny Wilson</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-20 h-20" src={img1} alt="" />
                        <div>
                            <h2>Jenny Wilson</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-20 h-20" src={img1} alt="" />
                        <div>
                            <h2>Jenny Wilson</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>
                        Tropical Adventure
                        <span>for Students.</span>
                    </h2>
                    <p>Student Tropical Vacation: Relax and Recharge</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Massa quis natoque sit quam</li>
                        <li>Eros non pellentesque elit </li>
                        <li>tortor id euismod habitant</li>
                        <li>Sed suspendisse id in ultrices</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Adventure;