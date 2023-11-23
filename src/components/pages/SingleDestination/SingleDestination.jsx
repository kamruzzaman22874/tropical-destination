
import { Link } from "react-router-dom"
import { BsThreeDots } from "react-icons/bs";
const SingleDestination = ({ destination }) => {
    const { title, image, address } = destination
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <img className="h-[350px]" src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between">
                    <p>{address}</p>
                    <Link>
                        <button><BsThreeDots /></button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default SingleDestination;