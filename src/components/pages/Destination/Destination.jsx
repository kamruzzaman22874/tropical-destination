import { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import SingleDestination from "../SingleDestination/SingleDestination";

const Destination = () => {
    const [destinations, setDestinations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [destPerPage] = useState(3);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);

    // Logic to calculate current destinations based on pagination
    const indexOfLastDest = currentPage * destPerPage;
    const indexOfFirstDest = indexOfLastDest - destPerPage;
    const currentDestinations = destinations.slice(indexOfFirstDest, indexOfLastDest);

    // Change page
    const paginate = pageNumber => {
        if (pageNumber >= 1 && pageNumber <= Math.ceil(destinations.length / destPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    const goToPrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div className="md:px-20 px-10">
            <h2 className="text-2xl font-bold my-5">Our Destinations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentDestinations.map(destination => (
                    <SingleDestination key={destination._id} destination={destination} />
                ))}
            </div>

            {destinations.length > destPerPage && (
                <div className="flex items-center justify-center mt-4">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className="mr-2 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <FaLongArrowAltLeft />
                    </button>

                    {Array(Math.ceil(destinations.length / destPerPage))
                        .fill()
                        .map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`mx-1 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                            >
                                {index + 1}
                            </button>
                        ))}

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === Math.ceil(destinations.length / destPerPage)}
                        className="ml-2 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <FaLongArrowAltRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Destination;
