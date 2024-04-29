import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row  rounded-lg">
                        <div className="mr-16 w-1/2">
                            <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm bg-slate-300 ">
                            <h1 className="text-3xl text-center mt-6 font-bold">Login now !</h1>
                            <form onSubmit={handleLogin} className="card-body ">

                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type={showPassword ? "text" : "password"} name="password" required placeholder="Password" className="input input-bordered" />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute mt-[51px] right-[50px]" >
                                        {
                                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                        }
                                    </span>
                                </div>

                                {/* <div>
                                    <h1 className="text-xl font-bold">Login With</h1>
                                    <button onClick={handleGoogleLogin} className="btn btn-outline rounded-b mt-4 w-40 lowercase">
                                        <FaGoogle></FaGoogle>
                                        Google
                                    </button>
                                    <br />
                                    <button className="btn btn-outline rounded-t w-40 lowercase">
                                        <FaGithub></FaGithub>
                                        GitHub
                                    </button>
                                </div> */}

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p className="text-center mt-4">Do Not Have Account ? <Link className="text-blue-700 font-semibold" to="/register">Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;