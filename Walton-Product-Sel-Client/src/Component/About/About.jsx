import person from '../../assets/images.jpeg';
import perts from '../../assets/Walton1469938231.jpg';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={perts} className="w-3/4 h-[400px] rounded-lg shadow-2xl border-8 border-gray-300" />
                        <img src={person} className="absolute w-1/2 h-[300px] rounded-lg shadow-2xl right-8 border-8 border-gray-300 top-1/2" />
                    </div>
                    <div className='lg:w-1/2 p-8'>
                        <h1 className='text-5xl uppercase font-bold text-amber-600'>About Us</h1>
                        <h1 className="text-5xl font-bold mt-6 text-[#151515]">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <button className="border-8 border-gray-300 uppercase bg-slate-500 text-white h-16  w-40 mt-6">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;