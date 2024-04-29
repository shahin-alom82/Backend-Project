import img1 from "../../assets/images/products/1.png"
import img2 from "../../assets/images/products/2.png"
import img3 from "../../assets/images/products/3.png"
import img4 from "../../assets/images/products/4.png"
import img5 from "../../assets/images/products/5.png"
import img6 from "../../assets/images/products/6.png"
const PopularPoducts = () => {
    return (
        <div>
            <div>
                <div className="text-center mt-24">
                    {/* <h1 className="text-3xl text-[#FF3811] font-bold">Popular Products</h1> */}
                    <h2 className="mt-4 text-4xl font-bold text-black">Browse Our Products</h2>
                    <p className=" mt-4 text-gray-700 text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {/* Card - 1 */}
                    <div className="card bg-gradient-to-r bg-slate-100 p-4">
                        <div className="bg-gray-300 rounded-lg ">
                            <img className="h-[250px] mx-auto  object-cover rounded-lg" src={img1} alt="Shoes" />
                        </div>
                        <div className="rating rating-md mt-4 mx-auto">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mx-auto">
                            <h2 className="card-title text-2xl font-bold h-5 mt-4">Car Engine Plug</h2>
                            <h1 className="text-xl mt-4 text-[#FF3811] text-center font-semibold">$20.00</h1>
                        </div>
                    </div>
                    {/* Card - 2 */}
                    <div className="card bg-gradient-to-r bg-slate-100 p-4">
                        <div className="bg-gray-300 rounded-lg ">
                            <img className="h-[250px] mx-auto  object-cover rounded-lg" src={img2} alt="Shoes" />
                        </div>
                        <div className="rating rating-md mt-4 mx-auto">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mx-auto">
                            <h2 className="card-title text-2xl font-bold h-5 mt-4">Car Air Filter</h2>
                            <h1 className="text-xl mt-4 text-[#FF3811] text-center font-semibold">$20.00</h1>
                        </div>
                    </div>
                    {/* Card - 3 */}
                    <div className="card bg-gradient-to-r bg-slate-100 p-4">
                        <div className="bg-gray-300 rounded-lg ">
                            <img className="h-[250px] mx-auto  object-cover rounded-lg" src={img3} alt="Shoes" />
                        </div>
                        <div className="rating rating-md mt-4 mx-auto">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mx-auto">
                            <h2 className="card-title text-2xl font-bold h-5 mt-4">Cools Led Light</h2>
                            <h1 className="text-xl mt-4 text-[#FF3811] text-center font-semibold">$20.00</h1>
                        </div>
                    </div>
                    {/* Card - 4 */}
                    <div className="card bg-gradient-to-r bg-slate-100 p-4">
                        <div className="bg-gray-300 rounded-lg ">
                            <img className="h-[250px] mx-auto  object-cover rounded-lg" src={img4} alt="Shoes" />
                        </div>
                        <div className="rating rating-md mt-4 mx-auto">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mx-auto">
                            <h2 className="card-title text-2xl font-bold h-5 mt-4">Cools Led Light</h2>
                            <h1 className="text-xl mt-4 text-[#FF3811] text-center font-semibold">$20.00</h1>
                        </div>
                    </div>
                    {/* Card - 5 */}
                    <div className="card bg-gradient-to-r bg-slate-100 p-4">
                        <div className="bg-gray-300 rounded-lg ">
                            <img className="h-[250px] mx-auto  object-cover rounded-lg" src={img5} alt="Shoes" />
                        </div>
                        <div className="rating rating-md mt-4 mx-auto">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mx-auto">
                            <h2 className="card-title text-2xl font-bold h-5 mt-4">Cools Led Light</h2>
                            <h1 className="text-xl mt-4 text-[#FF3811] text-center font-semibold">$20.00</h1>
                        </div>
                    </div>
                    {/* Card - 6 */}
                    <div className="card bg-gradient-to-r bg-slate-100 p-4">
                        <div className="bg-gray-300 rounded-lg ">
                            <img className="h-[250px] mx-auto  object-cover rounded-lg" src={img6} alt="Shoes" />
                        </div>
                        <div className="rating rating-md mt-4 mx-auto">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mx-auto">
                            <h2 className="card-title text-2xl font-bold h-5 mt-4">Cools Led Light</h2>
                            <h1 className="text-xl mt-4 text-[#FF3811] text-center font-semibold">$20.00</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularPoducts;