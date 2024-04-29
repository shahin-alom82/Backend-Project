import { useLoaderData } from "react-router-dom";
import MyProducts from "../MyProducts/MyProducts";
// import { useState } from "react";

// import { useState } from "react";

const MyProduct = () => {
    const myProducts = useLoaderData()

    // const [productDelete, setProductDelete] = useState([])

    // const handleDelete = (id) => {}

    // const remaining = productDelete.filter(booking => booking._id !== id);
    // setProductDelete(remaining);

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-semibold text-center text-amber-500">Total Product : {myProducts.length}</h1>

            <div className="gap-5 mt-10">
                {
                    myProducts.map(myProduct => <MyProducts key={myProduct._id} myProduct={myProduct}
                        // handleDelete={handleDelete}
                    ></MyProducts>)
                }
            </div>
        </div>
    );
};

export default MyProduct;