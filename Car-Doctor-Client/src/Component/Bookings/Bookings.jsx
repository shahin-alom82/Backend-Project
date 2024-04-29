import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingsRow from "../BookingsRow/BookingsRow";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);



    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )

                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)

                        }
                    })
            }
        }))

    }

    const handleConfrimd = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: 'confirm' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //Update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }


    return (
        <div>
            <h1 className='text-4xl text-center mt-6 text-amber-700'>My Bookings : <span className="text-amber-400">{bookings.length}</span></h1>


            <div className="overflow-x-auto">
                <table className="table mt-6">
                    <tbody >
                        {
                            bookings.map(booking => <BookingsRow
                                key={booking._id}
                                handleDelete={handleDelete}
                                handleConfrimd={handleConfrimd}
                                booking={booking}
                            ></BookingsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;