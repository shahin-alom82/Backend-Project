import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loadededData = useLoaderData()

    const hamdleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)

        const updateUser = { name, email }

        fetch(`http://localhost:5000/users/${loadededData._id}`, {
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
        <div>
            <h1 className="text-center text-4xl mt-10">Uppdate Form </h1>
            <form onSubmit={hamdleUpdate} className="text-green-500 text-center text-2xl mt-5">
                <input className="border border-stone-950 p-2" type="text" name="name" defaultValue={loadededData.name} id="" />
                <br />
                <input className="border border-stone-950 mt-6 p-2" type="email" name="email" defaultValue={loadededData.email} id="" />
                <br />
                <input className="bg-green-300 w-[300px] text-white h-14" type="submit" value="update" id="" />
            </form>
        </div>
    );
};

export default Update;




