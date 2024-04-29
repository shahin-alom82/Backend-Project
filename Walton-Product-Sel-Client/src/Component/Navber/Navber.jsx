// import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/preview.png"
// import { useContext } from "react";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

// import { AuthContext } from "../AuthProvider/AuthProvider";
const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myProduct">My Product</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div>

            <div className="navbar rounded-lg mt-5 h-24 bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <img className="normal-case lg:h-12 w-48 font-bold" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleSignOut} className="bg-green-500 text-white h-14 w-24 font-semibold rounded-lg lg:ml-[350px]">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="bg-green-500 text-white h-14 w-24 font-semibold rounded-lg lg:ml-[350px]">Login</button>
                            </Link>
                    }
                </div>
            </div>


        </div>
    );
};

export default Navber;



