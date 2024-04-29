import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import logo from "../../assets/preview.png"
const Product = () => {
    const product = useLoaderData()
    return (
        <div>
            <img className="text-center mt-5 text-4xl font-bold h-20 w-52 mx-auto" src={logo} alt="" />
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 ">
                {
                    product.map(products => <Products key={products._id} products={products}></Products>)
                }
            </div>
        </div>
    );
};

export default Product;