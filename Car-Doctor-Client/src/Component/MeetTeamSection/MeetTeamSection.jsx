import img1 from "../../assets/images/team/1.jpg"
import img2 from "../../assets/images/team/2.jpg"
import img3 from "../../assets/images/team/3.jpg"
const MeetTeamSection = () => {
    return (
        <div>
            <div className="text-center mt-24">
                {/* <h1 className="text-3xl text-[#FF3811] font-bold">Team</h1> */}
                <h2 className="mt-4 text-4xl font-bold text-black">Meet Our Team</h2>
                <p className=" mt-4 text-gray-700 text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {/* Card - 1 */}
                <div className="card bg-gradient-to-r bg-slate-100 h-[440px]">
                    <div className="rounded-lg ">
                        <img className="h-[300px] mx-auto  object-cover rounded-lg" src={img1} alt="Shoes" />
                    </div>
                    <div className="mx-auto p-2">
                        <h2 className="card-title text-2xl font-bold mt-2">Car Engine Plug</h2>
                        <h1 className="text-xl mt-2 text-gray-600 text-center">Engine Expert</h1>
                        <div className='flex  gap-4 mt-2'>
                            <img className='h-6' src="https://i.ibb.co/zPL5c93/images-removebg-preview.png" alt="" />
                            <img className='h-6 ml-4' src="https://i.ibb.co/Yf81ZRy/twitter-removebg-preview.png" alt="" />
                            <img className='h-6' src="https://i.ibb.co/23P3ntw/youtube-removebg-preview.png" alt="" />
                            <img className='h-6' src="https://i.ibb.co/Z8ZMvW3/instagram-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* Card - 2 */}
                <div className="card bg-gradient-to-r bg-slate-100 h-[440px]">
                    <div className="rounded-lg ">
                        <img className="h-[300px] mx-auto  object-cover rounded-lg" src={img2} alt="Shoes" />
                    </div>
                    <div className="mx-auto p-2">
                        <h2 className="card-title text-2xl font-bold mt-2">Car Engine Plug</h2>
                        <h1 className="text-xl mt-2 text-gray-600 text-center">Engine Expert</h1>
                        <div className='flex mt-2 gap-4'>
                            <img className='h-6' src="https://i.ibb.co/zPL5c93/images-removebg-preview.png" alt="" />
                            <img className='h-6 ml-4' src="https://i.ibb.co/Yf81ZRy/twitter-removebg-preview.png" alt="" />
                            <img className='h-6' src="https://i.ibb.co/23P3ntw/youtube-removebg-preview.png" alt="" />
                            <img className='h-6' src="https://i.ibb.co/Z8ZMvW3/instagram-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* Card - 3 */}
                <div className="card bg-gradient-to-r bg-slate-100 h-[440px]">
                    <div className="rounded-lg ">
                        <img className="h-[300px] mx-auto  object-cover rounded-lg" src={img3} alt="Shoes" />
                    </div>
                    <div className="mx-auto p-2">
                        <h2 className="card-title text-2xl font-bold mt-2">Car Engine Plug</h2>
                        <h1 className="text-xl mt-2 text-gray-600 text-center">Engine Expert</h1>
                        <div className='flex mt-2 gap-4'>
                            <img className='h-6' src="https://i.ibb.co/zPL5c93/images-removebg-preview.png" alt="" />
                            <img className='h-6 ml-4' src="https://i.ibb.co/Yf81ZRy/twitter-removebg-preview.png" alt="" />
                            <img className='h-6' src="https://i.ibb.co/23P3ntw/youtube-removebg-preview.png" alt="" />
                            <img className='h-6' src="https://i.ibb.co/Z8ZMvW3/instagram-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MeetTeamSection;