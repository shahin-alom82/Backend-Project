import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const checkoutService = useLoaderData();
    const { title, price, _id, img } = checkoutService;
    const { user } = useContext(AuthContext)
    const handleChecOut = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const bookings = {
            customerName: name,
            date,
            img,
            email,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(bookings)
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Service Booking Successfuly!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-10">Book Service : {title}</h1>



            <form onSubmit={handleChecOut} className="card-body mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control mt-6 mx-52">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>

        </div>

    );
};

export default CheckOut;