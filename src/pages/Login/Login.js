import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-14">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary uppercase">Login</button>
                    </div>
                    </form>

                    <div className="flex flex-col w-full px-8 border-opacity-50 pb-14">
                        <div className="divider">OR</div>
                      
                        <button type="button" className="btn btn-outline btn-ghost mb-4">
                            <FcGoogle />
                            <span className="ml-4 uppercase">Sign In With Google</span>
                        </button>
                        <button type="button" className="btn btn-outline btn-ghost">
                            <FaGithub />
                            <span className="ml-4 uppercase">Sign In With Github</span>
                        </button>
                        
                    </div>
                   
                </div>
               
               
            </div>
      </div>
    );
};

export default Login;