import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <section className="py-12 ">
            <div className="md:w-11/12 mx-auto">
                <ul className="md:flex text-center md:flex-cols gap-5 text-lg justify-around">
                    <li className="list-none"><Link>Privacy Policy</Link></li>
                    <li className="list-none"><Link>Terms of Use</Link></li>
                    <li className="list-none"><Link>Sales and Refunds</Link></li>
                    <li className="list-none"><Link>Legal</Link></li>
                    <li className="list-none"><Link>About</Link></li>
                    <li className="list-none"><Link>Schedules</Link></li>
                    <li className="list-none"><Link>Pricing</Link></li>
                    <li className="list-none"><Link>Membership</Link></li>
                    <li className="list-none"><Link>Joins</Link></li>
                </ul>
            </div>
        </section>


    );
};

export default Footer;