import svg1 from "../../assets/icons/group.svg"
import svg2 from "../../assets/icons/Group 38729.svg"
import svg3 from "../../assets/icons/person.svg"
import svg4 from "../../assets/icons/Wrench.svg"
import svg5 from "../../assets/icons/check.svg"
import svg6 from "../../assets/icons/deliveryt.svg"
const WhyChooseUs = () => {
    return (
        <div>
            <div className="text-center mt-20 ">
                <h1 className="text-4xl font-bold text-black">Why Choose Us</h1>
                <p className="mt-4 text-xl text-gray-700">the majority have suffered alteration in some form, by injected humour, or randomised
                    <br />
                    words which dont look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 text-center lg:ml-10 mx-auto m-10">


                <div className="  w-44 h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-5 text-center mx-auto" src={svg1} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-[18px] text-center font-semibold tracking-tight text-gray-800">Expert Team</h5>
                        </a>
                    </div>
                </div>

                <div className=" w-44 h-36 bg-[#FF3811]  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-5 text-center mx-auto" src={svg2} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-[18px] text-center font-semibold tracking-tight  dark:text-white text-white">Timely Delivery</h5>
                        </a>
                    </div>
                </div>

                <div className=" w-44 h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-5 text-center mx-auto" src={svg3} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-[18px] text-center font-semibold tracking-tight text-gray-800 dark:text-white ">24/7 Support</h5>
                        </a>
                    </div>
                </div>
                
                <div className=" w-44 h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-5 text-center mx-auto" src={svg4} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-[18px] text-center font-semibold tracking-tight text-gray-800 dark:text-white ">Best Equipment</h5>
                        </a>
                    </div>
                </div>

                <div className=" w-44 h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-5 text-center mx-auto" src={svg5} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-[18px] text-center font-semibold tracking-tight text-gray-800 dark:text-white ">100% Guranty</h5>
                        </a>
                    </div>
                </div>

                <div className="w-44 h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="p-5 text-center mx-auto" src={svg6} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-[18px] text-center font-semibold tracking-tight text-gray-800 dark:text-white ">Timely Delivery</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;