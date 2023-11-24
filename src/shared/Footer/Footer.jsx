import { Link } from "react-router-dom"

const Footer = () => {
    return (
        // <section className="py-12 ">
        //     <div className="md:w-11/12 mx-auto">
        //         <ul className="md:flex text-center md:flex-cols gap-5 text-lg justify-around">
        //             <li className="list-none"><Link>Privacy Policy</Link></li>
        //             <li className="list-none"><Link>Terms of Use</Link></li>
        //             <li className="list-none"><Link>Sales and Refunds</Link></li>
        //             <li className="list-none"><Link>Legal</Link></li>
        //             <li className="list-none"><Link>About</Link></li>
        //             <li className="list-none"><Link>Schedules</Link></li>
        //             <li className="list-none"><Link>Pricing</Link></li>
        //             <li className="list-none"><Link>Membership</Link></li>
        //             <li className="list-none"><Link>Joins</Link></li>
        //         </ul>
        //     </div>
        // </section>
        <header class=" border-b border-gray-700">
            <div class="px-4 flex justify-center mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav class="flex items-center   h-16 lg:h-20">
                    <div class="hidden md:flex md:items-center md:space-x-10">
                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Features </a>

                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Solutions </a>

                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Resources </a>

                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Pricing </a>
                    </div>

                    <div class="hidden md:flex md:items-center md:space-x-10">
                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Features </a>

                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Solutions </a>

                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Resources </a>

                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Pricing </a>
                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Pricing </a>
                        <a href="#" title="" class="text-sm font-medium  transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"> Pricing </a>
                    </div>
                </nav>
                <nav class="min-h-screen px-4 py-10 text-center bg-black md:hidden">
                    <button type="button" class="inline-flex p-2  transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <nav class="flex flex-col items-center mt-10 space-y-2">
                        <a href="#" title="" class="py-2 font-medium  transition-all duration-200 focus:text-opacity-70"> Features </a>

                        <a href="#" title="" class="py-2 font-medium  transition-all duration-200 focus:text-opacity-70"> Solutions </a>

                        <a href="#" title="" class="py-2 font-medium  transition-all duration-200 focus:text-opacity-70"> Resources </a>

                        <a href="#" title="" class="py-2 font-medium  transition-all duration-200 focus:text-opacity-70"> Pricing </a>
                    </nav>
                </nav>
            </div>
        </header>


    );
};

export default Footer;