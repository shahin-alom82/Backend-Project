import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const from = location.state?.from?.pathName || "/"
    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.photo.value;
        const remember = form.remember.value;
        console.log(name, email, password, img, remember)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen mt-10">
                <div className="hero-content flex-col lg:flex-row rounded-lg">
                    <div className="mr-16 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-slate-300 ">
                        <h1 className="text-3xl text-center mt-6 font-bold ">Register Now!</h1>
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text"> Your Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="Email" name="email" required placeholder="Your Email Address" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
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
                                {/* <div>
                                    <h1 className="text-xl font-bold mt-4">Login With</h1>
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



                            </div>
                            <div className="flex items-start mt-3">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept your termp condition?</label>
                                </div>
                            </div>

                            <div className='form-control mt-4'>
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p className="text-center mt-2">Already Have an Account ? <Link className="text-blue-700 font-semibold" to="/login">Login</Link></p>
                            {/* {
                                registerArror && <p className="text-red-500 text-center">{registerArror}</p>
                            } */}
                            {/* {
                                success && <p className="text-blue-800 text-center">{success}</p>
                            } */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;