import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/5.jpg"

const AboutImg = () => {
    return (
        <div>

            <div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 ">
                    <div>
                        <img className="h-[500px] mt-20" src={img1} alt="" />
                    </div>
                    <div>
                        <img className="h-[600px] mt-6" src={img2} alt="" />
                    </div>
                    <div>
                        <img className="h-[500px] mt-20" src={img3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutImg;