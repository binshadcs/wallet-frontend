import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    return (
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign In
                        </h1>
                        <h3 className="text-gray-400">
                            Enter your credential to access your account
                        </h3>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input onChange={(e)=> setUsername(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required="" />
                            </div>
                            <div >
                                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " required="" />
                            </div>
                            
                            
                            <button onClick={async()=> {
                                const response = await axios.post("https://paymentwallet.onrender.com/api/v1/user/signin", {
                                    username,
                                    password
                                })
                                if(response.data.token) {
                                    localStorage.setItem("token", response.data.token)
                                    navigate("/dashboard")
                                }
                            }} type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Already have an account? <Link to={'/signup'} className="font-medium text-primary-600 hover:underline ">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}