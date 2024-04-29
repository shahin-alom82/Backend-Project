import person from '../../assets/images/about_us/person.jpg';
import perts from '../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-3/4 h-[400px] rounded-lg shadow-2xl" />
                        <img src={perts} className="absolute w-1/2 h-[300px] rounded-lg shadow-2xl right-8 border-8 border-gray-500 top-1/2" />
                    </div>
                    <div className='lg:w-1/2 p-8'>
                        <h1 className='text-5xl uppercase font-bold text-amber-600'>About Us</h1>
                        <h1 className="text-5xl font-bold mt-6 text-[#151515]">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <button className="border-4 border-gray-500 h-16 w-44  uppercase text-white bg-slate-400 mt-6">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;