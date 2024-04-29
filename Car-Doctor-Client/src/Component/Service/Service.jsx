import { useEffect, useState } from "react";
import Services from "../Services/Services";

const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="mt-20">
                <div className="text-center">
                    {/* <h1 className="text-3xl text-[#FF3811] font-bold">Service</h1> */}
                    <h2 className="mt-4 text-4xl font-bold text-black">Our Service Area</h2>
                    <p className=" mt-4 text-xl text-gray-700">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {
                        service.map(service => <Services key={service._id} service={service}></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;