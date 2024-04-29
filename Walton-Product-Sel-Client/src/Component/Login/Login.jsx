// // import { Link } from "react-router-dom";
// // // import { FaEye, FaEyeSlash } from "react-icons/fa6";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import auth from "../firebase/firebase.config";
// // import { useContext, useState } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import { useContext, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../firebase/firebase.config";
// import { Link } from "react-router-dom";

// // import { AuthContext } from "../Provider/AuthProvider";
// const Login = () => {


//     const { login } = useContext(AuthContext);
//     const { singInUser } = useContext(AuthContext);

//     const [registerError, setRegisterError] = useState("")
//     const [success, setSuccess] = useState('')

//     // const from = location.state?.from?.pathName || "/"
//     // const navigate = useNavigate()

//     const handleLogin = e => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         login(email, password);


//         singInUser(email, password)
//             .then(result => {
//                 console.log(result.user)

//             })
//             .catch(error => console.log(error))

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

//         // 1st kaj
//         signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 console.log(result.user)
//                 setSuccess('User Login Successfully!')
//                 // navigate(from, { replace: true })

//             })

//             .catch(error => {
//                 console.log(error)
//                 setRegisterError(error.message)
//             }
//             )
//     }
//     return (
//         <div>
//             <div className="w-full mx-auto mt-10 max-w-sm p-4  border-8 bg-slate-100 border-gray-300 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//                 <form onSubmit={handleLogin} className="space-y-6" action="#">
//                     <h5 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">Please Login</h5>
//                     <div>
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Address</label>
//                         <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Email Address" required />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
//                         <div>
//                             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
//                             <span>

//                             </span>
//                         </div>
//                     </div>

//                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
//                     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//                         Not registered? <Link to="/ragistation"><a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a></Link>
//                     </div>
//                 </form>
//                 {
//                     success && <p className="text-center text-green-600">
//                         {success}
//                     </p>
//                 }
//                 {
//                     registerError && <p className="text-center text-red-600">
//                         {registerError}
//                     </p>
//                 }
//             </div>

//         </div>
//     );
// };

// export default Login;




// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import { FaEyeSlash, FaEye } from 'react-icons/fa';
// import { useContext, useState } from "react";


// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { AuthContext } from "../../AuthProvider";

const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
    }
    const [showPassword, setShowPassword] = useState("");
    const [error, setError] = useState(null);
    // const { signIn } = useContext(AuthContext)
    const { signIn } = useContext(AuthContext)
    const locatiion = useLocation();
    const navigate = useNavigate()

    const from = locatiion.state?.from?.pathname || "/"
    

    const handleLogin = async (e) => {
        e.preventDefault();

        const emmail = e.target.email.value;
        const password = e.target.password.value;
        try {
            const result = await signIn(emmail, password);
            console.log(result.user);
            navigate(from, { replace: true });
        } catch (error) {
            console.error("login error:", error);
            setError("Invalid Password & Email");
        }

    }
    return (
        <div>
            <div>
                <div className="w-full mx-auto mt-10 max-w-sm p-4  border-8 bg-slate-100 border-gray-300 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <h1 className="text-center text-3xl font-bold">Please Login Now !!</h1>
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
                            <span className="absolute mt-[51px] right-[630px]" onClick={() => setShowPassword(!showPassword)} >
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Login With</h1>
                            <button onClick={handleGoogleLogin} className="btn btn-outline rounded mt-4 w-40 lowercase">
                                <FaGoogle></FaGoogle>
                                Google
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center mt-4">Do Not Have Account ? <Link className="text-blue-500 " to="/ragistation">Register</Link></p>
                    </form>
                    {
                        error && <p className="text-red-500 text-center">{error}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;