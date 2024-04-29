import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const url = form.url.value;
        const name = form.name.value;
        const brand = form.selec.value;
        const price = form.price.value;
        const add = { url, name, brand, price };
        console.log(add);

        fetch("http://localhost:5000/addProduct",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(add)
            }
        )

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Product Addet Succsessfuly!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div>

            <div>
                <div className=" rounded-lg mt-5  ">
                    <form onSubmit={handleSubmit} className="p-5 border-8 bg-slate-100 border-gray-300 rounded-lg md:w-3/4 lg:w-1/2 mx-auto">
                        <h1 className="text-center text-3xl font-bold">Add Product</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Photo URL</span>
                            </label>
                            <input type="text" name="url" required placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <select className="select select-bordered lg:w-[665px]" name="selec">
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
                            <input type="text" name="name" required placeholder=" Description" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" required placeholder="Price" className="input input-bordered" />
                        </div>


                        <div className="form-control mt-6">
                            <button className="mx-auto border-8 border-gray-300 uppercase bg-slate-500 text-white h-16  w-40 mt-6">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;