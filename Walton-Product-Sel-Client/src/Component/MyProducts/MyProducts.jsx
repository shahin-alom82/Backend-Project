import { Link } from 'react-router-dom';
const MyProducts = ({ myProduct, handleDelete }) => {

    const { _id, name, url, price, brand } = myProduct


    return (
        <div>
            {/* h-14 text-white w-36 bg-green-400 rounded-lg text-xl */}
            <div className="card card-side bg-orange-100 mt-8 lg:mx-52">
                <img className="h-[300px] w-[450px] rounded-lg" src={url} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title text-3xl text-black">{brand}</h2>
                    <p className="mt-8 text-xl text-gray-700">{name}</p>
                    <p className=" text-xl text-gray-700">$ {price}</p>
                    <div className="card-actions flex justify-end gap-2">
                        <Link to={`/update/${myProduct._id}`}><button className=" border-8 lg:ml-32 border-gray-300 uppercase bg-slate-500  font-semibold text-green-500 h-16  w-36 mt-6">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="mx-auto border-8 border-gray-300 uppercase bg-slate-500 text-red-400 font-semibold h-16  w-36 mt-6">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;