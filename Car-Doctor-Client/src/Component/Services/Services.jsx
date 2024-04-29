import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const { _id, price, img, title } = service;
    return (
        <div>
            <div className="card bg-gradient-to-r bg-slate-100 h-[480px]">
                <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                <div className="p-6">
                    <h2 className="card-title text-3xl font-semibold h-5 mt-2">{title}</h2>
                    <h1 className="text-2xl mt-6 font-semibold text-[#FF3811] justify-between">{price}</h1>
                    <div className="card-actions justify-center">
                        <Link to={`/checkout/${_id}`}>
                            <button className=" rounded lg:text-xl  uppercase text-white bg-[#548e9b] lg:w-[350px] h-14 md:w-[300px] mt-6">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;