import { Link } from "react-router-dom";

const Products = ({ products }) => {

    const { _id, name, price, img } = products
    return (
        <div>
            <div data-aos="zoom-in" className="card shadow-lg lg:h-[480px] md:h-[700px] bg-purple-400">
                <img className="h-[280px] bg-slate-300 rounded-lg" src={img} alt="Shoes" />
                <div className="p-4">

                    <h1 className="text-2xl mt-3 font-semibold">{name}</h1>
                    <h2 className="card-title mt-2">{price}</h2>
                    <Link to={`/details/${_id}`}><button className="border-8 border-gray-300 uppercase bg-slate-500 text-white h-16  w-40 mt-6">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;