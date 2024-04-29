import About from "../About/About";
import Banner from "../Banner/Banner";
import CustomerCare from "../CustomerCare/CustomerCare";
import MeetTeamSection from "../MeetTeamSection/MeetTeamSection";
import PopularPoducts from "../PopularPoducts/PopularPoducts";
import Service from "../Service/Service";
import ServiceTime from "../ServiceTime/ServiceTime";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <ServiceTime></ServiceTime>
            <PopularPoducts></PopularPoducts>
            <MeetTeamSection></MeetTeamSection>
            <WhyChooseUs></WhyChooseUs>
            <CustomerCare></CustomerCare>
        </div>
    );
};

export default Home;