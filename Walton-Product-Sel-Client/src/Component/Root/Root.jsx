import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../../Footer/Footer";

const Root = () => {
    return (
        <div className="mx-12 p-2">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;