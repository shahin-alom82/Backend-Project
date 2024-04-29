// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import auth from "../firebase/firebase.config";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// // import { useContext, useState } from "react";
// // import { Link } from "react-router-dom";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";

// import { useContext, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "../firebase/firebase.config";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// // import { AuthContext } from "../Provider/AuthProvider";
// const Register = () => {
//     const { createUser } = useContext(AuthContext)
//     const location = useLocation()

//     const [registerError, setRegisterError] = useState("")
//     const [success, setSuccess] = useState('')
//     const [showPassword, setShowPassword] = useState(false)

//     const from = location.state?.from?.pathName || "/"
//     const navigate = useNavigate()

//     const hadleRegistar = e => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const tremp = e.target.remember.checked
//         console.log(name, email, password, tremp)


//         // Create User in Firebase
//         createUser(name, email, password)
//             .then(result => {
//                 console.log(result.user)
//             })
//             .catch(error => {
//                 console.error(error)
//             })


//         // Reset Error
//         setRegisterError('')
//         setSuccess('')

//         if (password.length < 6) {
//             setRegisterError("Password should be at least 6 characters longer");
//             return;
//         }
//         else if (/[A-Z]/.test(password)) {
//             setRegisterError('Your password should have at least one upper case characters.')
//             return;
//         }
//         else if (!tremp) {
//             setRegisterError('Please accept our terms and condition!')
//             return;
//         }

//         // Create User
//         createUserWithEmailAndPassword(auth, email, password)

//             .then(result => {
//                 console.log(result.user)
//                 setSuccess('User Registation Successfully!')
//                 navigate(from, { replace: true })
//             })

//             .catch(error => {
//                 console.log(error)
//                 setRegisterError(error.message)
//             }
//             )
//     }
//     return (
//         <div>
//             <div className="w-full mx-auto mt-10 max-w-sm p-4 bg-white border-8  border-gray-300 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//                 <form onSubmit={hadleRegistar} className="space-y-6" action="#">
//                     <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Please Registation</h5>
//                     <div>
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
//                         <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Please Your Name" required />
//                     </div>
//                     <div className="">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Address</label>
//                         <input type="email"
//                             name="email" id="email"
//                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                             placeholder="Your Email Address" required />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
//                         <div className="flex relative">
//                             <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
//                             <span className="absolute ml-72 mt-3" onClick={() => setShowPassword(!showPassword)}>
//                                 {
//                                     showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />
//                                 }
//                             </span>
//                         </div>
//                     </div>

//                     <div className="flex items-start">
//                         <div className="flex items-start">
//                             <div className="flex items-center h-5">
//                                 <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
//                             </div>
//                             <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept your termp condition?</label>
//                         </div>
//                     </div>
//                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registation</button>
//                     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//                         <Link to="/login"><a href="#" className="text-blue-700 hover:underline dark:text-blue-500 lg:ml-[120px]">Please Login</a></Link>
//                     </div>
//                 </form>
//                 {
//                     registerError && <p className="text-red-600 text-center">
//                         {registerError}
//                     </p>
//                 }
//                 {
//                     success && <p className="text-green-600 text-center">
//                         {success}
//                     </p>
//                 }
//             </div>
//         </div>
//     );
// };

// export default Register;















// import { useContext, useState } from 'react';
// import { FaEyeSlash, FaEye } from 'react-icons/fa';
// // import { Link, useNavigate } from 'react-router-dom';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider';

const Register = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"
    const handleGoogleLogin = async () => {
        try {
         await signInWithPopup(auth, provider);
        //  toast("GoogleLogin Successfully!");
        }catch(error) {
            console.error("Google Login Error:", error)
        }
    }
    const [registerArror, setRegijsterArror] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();

    // const { createUser } = useContext(AuthContext)
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        const accept = form.get('terms')
        console.log(name, email, photo, password, accept);
        setRegijsterArror("");

        if (password.length < 6) {
            setRegijsterArror(' Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegijsterArror('Passwor Shuld be At Least One UpperCasse Caractaars')
            return;
        }
        else if (!accept) {
            setRegijsterArror('Please Accept Our Terms And Conditions')
            return;
        }
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                // toast('Email Create Successfuly!')
                // navigate("/login")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setRegijsterArror(error.message)
            })
    }
    return (
        <div>
            <div className='w-full mx-auto mt-10 max-w-sm p-4  border-8 bg-slate-100 border-gray-300 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <form onSubmit={handleRegister} className="space-y-6">
                    <h1 className="md:mx-24 text-center text-3xl font-bold mt-5">Register</h1>
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
                        <span className="absolute mt-[51px] right-[630px]" onClick={() => setShowPassword(!showPassword)} >
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }
                        </span>
                        <div>
                            <h1 className="text-xl font-bold mt-4">Login With</h1>
                            <button onClick={handleGoogleLogin} className="btn btn-outline rounded mt-4 w-40 lowercase">
                                <FaGoogle></FaGoogle>
                                Google
                            </button>
                        </div>
                        <br />
                        <a href="#" className="label-text-alt link link-hover mt-4">Forgot password?</a>
                        <div className='flex items-center gap-2'>
                        <label className="label">
                            <input className="text-start mt-5" type="checkbox" name="terms" id="terms" />
                            <p className='text-sm mt-5 ml-2'>Accept Your Terms Condition?</p>
                        </label>
                        </div>
                    </div>
                    <div className='form-control mt-6'>
                        <button className="btn btn-primary">Register</button>
                    </div>

                    <p className="text-center mt-4">Already Have an Account ? <Link className="text-blue-700 font-bold" to="/login">Login</Link></p>
                    {
                        registerArror && <p className="text-red-500 text-center">{registerArror}</p>
                    }
                    {/* {
                        success && <p className="text-blue-800 text-center">{success}</p>
                    } */}
                </form>
            </div>
        </div>
    );
};
export default Register;