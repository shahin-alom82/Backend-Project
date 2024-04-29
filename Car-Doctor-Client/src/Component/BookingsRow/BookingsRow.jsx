
const BookingsRow = ({ booking, handleDelete, handleConfrimd }) => {
    const { _id, date, service, img, price, status } = booking;


    return (
        <div className="mt-3">

            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle text-white btn-outline bg-red-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>

                <td>
                    <div className="flex items-center font-semibold text-xl text-gray-600">
                        <div className="avatar">
                            <div className="h-24 w-24" >
                                {img && <img className="rounded-full" src={img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div className="lg:ml-20">
                            {service}
                        </div>
                        <h1 className="lg:ml-32">{date}</h1>
                        <h1 className="lg:ml-32">{price}</h1>
                    </div>
                </td>

                <th>
                    {
                        status === 'confirm' ? <button className="font-semibold bg-gray-300 text-[16px] h-12 rounded w-36 lg:ml-52 text-fuchsia-500">Confirmed</button> :
                            <button onClick={() => handleConfrimd(_id)} className="h-12 w-36 rounded font-semibold text-white text-[16px] bg-green-400 lg:ml-52 ">Please Confirm</button>
                    }
                </th>
            </tr>
            <div className="divider divider-success"></div>

        </div>
    );
};

export default BookingsRow;












// const BookingsRow = ({ booking, handleDelete, handleConfirm }) => {
//     const { _id, date, service, img, price, status } = booking;

//     return (
//         <div>
//             <tr key={_id}>
//                 <td>
//                     <button onClick={() => handleDelete(_id)} className="btn btn-circle text-white btn-outline bg-red-400">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </td>
//                 <td>
//                     <div className="flex items-center font-semibold text-xl text-gray-600">
//                         <div className="avatar">
//                             <div className="rounded-full h-24 w-24 lg:ml-10">
//                                 {img && <img src={img} alt="Booking Avatar" />}
//                             </div>
//                         </div>
//                         <div className="lg:ml-10">{service}</div>
//                         <h1 className="lg:ml-20">{date}</h1>
//                         <h1 className="lg:ml-20">{price}</h1>
//                     </div>
//                 </td>
//                 <td>
//                     {status === 'confirm' ? (
//                         <button className="font-semibold bg-gray-300 text-[16px] h-12 rounded w-36 lg:ml-20 text-fuchsia-500">Confirmed</button>
//                     ) : (
//                         <button onClick={() => handleConfirm(_id)} className="h-12 w-36 rounded font-semibold text-white text-[16px] bg-green-700 lg:ml-20 ">Please Confirm</button>
//                     )}

//                 </td>
//             </tr>
//
//         </div>
//     );
// };

// export default BookingsRow;
