import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handlelognOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutImg">About</NavLink></li>
        {
            user?.email ? <>
                <li><NavLink to="/bookings">My Bookings</NavLink></li>
            </>
                :
                <li></li>
        }
        <li><NavLink to="/login">Login</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar rounded-lg mt-5 h-24">
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
                        <img className="h-20 w-64" src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden text-xl lg:flex">
                    <ul className="text-green-700  menu-horizontal px-1 gap-20">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {

                        user ?
                            <button onClick={handlelognOut} className="bg-green-700  text-white h-14 w-28 font-semibold rounded-lg lg:ml-[350px]"> Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="bg-green-700 text-white h-14 w-24  font-semibold rounded-lg lg:ml-[350px]">Login</button>
                            </Link>
                    }
                </div>
            </div>
            <div className="divider divider-success"></div>

        </div>
    );
};

export default Navbar;