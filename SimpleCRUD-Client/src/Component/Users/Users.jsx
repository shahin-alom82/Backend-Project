import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)




    const handleDelete = _id => {
        console.log("deleted", _id)
        fetch(`http://localhost:5000/users/${_id}`,
            { method: "DELETE" }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "User Deleted Successfuly!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining)
                }
            })
    }


    return (
        <div className="text-center mt-14 text-2xl">
            <h1>{users.length}</h1>
            {
                users.map(user =>
                    <p className="text-start items-center" key={user._id}>User Name : {user.name} : User Email : {user.email} {user._id}
                        <Link to={`/update/${user._id}`}>
                            <button className="bg-green-400 text-white w-20 h-14 rounded">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)} className=" bg-red-400 text-red-800 ml-4 rounded w-20 h-14">X</button>  </p>
                )}
        </div>
    );
};

export default Users;