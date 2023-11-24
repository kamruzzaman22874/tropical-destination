import man from "../../../assets/man.png"
import man1 from "../../../assets/man1.png"
import man2 from "../../../assets/man2.png"
const Testimonials = () => {
    return (
        <div className="my-20 px-20">
            <h2 className="text-center text-2xl font-bold">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                <div className="flex flex-col justify-center items-center space-y-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={man} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="border-b-4 text-center w-32 mx-auto mb-3">Corey Korsgaard</h4>
                        <p>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content of a page when <br /> looking at its layout.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={man1} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="border-b-4 w-32 mx-auto mb-3">Jakob Aminoff</h4>
                        <p>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content of a page when <br /> looking at its layout.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={man2} />
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="border-b-4 w-32 mx-auto mb-3">Carla Press</h4>
                        <p>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content of a page when <br /> looking at its layout.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;