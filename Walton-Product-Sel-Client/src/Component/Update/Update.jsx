import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";

const Update = () => {


    const loadededData = useLoaderData()

    const hamdleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const url = form.url.value;
        const name = form.name.value;
        const brand = form.selec.value;
        const price = form.price.value;
        console.log(url, name, brand, price);

        const updateUser = { name, url, brand, price }

        fetch(`http://localhost:5000/addProduct/${loadededData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateUser)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User Updateted Successfuly!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className=" rounded-lg mt-10 ">
            <form onSubmit={hamdleUpdate} className="p-5 border border-gray-700 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                <h1 className="text-center text-3xl font-bold">Add Product</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Photo URL</span>
                    </label>
                    <input type="text" name="url" required placeholder="Photo URL" defaultValue={loadededData.url} className="input input-bordered" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <select className="select select-bordered lg:w-[665px]" name="selec" defaultValue={loadededData.brand}>
                        <option>Walton Air Condition</option>
                        <option>Walton Laptop</option>
                        <option>Walton Fan</option>
                        <option>Walton LED TV</option>
                        <option>Walton Refrigerator</option>
                        <option>Walton Gash Stop</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="name" required placeholder=" Description" defaultValue={loadededData.name} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" required placeholder="Price" defaultValue={loadededData.price} className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                 <button className="mx-auto border-8 border-gray-300 uppercase bg-slate-500 text-white h-16  w-40 mt-6">Update</button>
                </div>
            </form>

        </div>
    );
};

export default Update;