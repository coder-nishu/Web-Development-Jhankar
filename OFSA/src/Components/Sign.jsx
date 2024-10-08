import React from "react";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:w-[28rem]  flex-col lg:flex-col ">
          <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
            <h1 className="text-center font-semibold text-5xl mt-2">
              nishat in{" "}
            </h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-fuchsia-200">Continue</button>
              </div>
              <hr />
              <h1 className="text-center font-semibold">Or</h1>
              <hr />
              <div className="flex items-center gap-5 w-72  mx-auto bg-slate-300 p-2  rounded-lg">
                <img
                  className="w-6 rounded-full  "
                  src="https://i.ibb.co/DkW07NG/google-logo-icon-134448.png"
                  alt=""
                />
                <a href="https://www.google.com">
                  <p className="text-lg ">login with Google</p>
                </a>
              </div>
              <div className="flex items-center mx-auto w-72  gap-5 bg-slate-300 p-2 rounded-lg">
                <img
                  className="w-6 rounded-full"
                  src="https://i.ibb.co/WFCXFr1/facebook-icon-512x512-seb542ju.png"
                  alt=""
                />
                <a href="https://www.google.com">
                  {" "}
                  <p className="text-lg  ">login with facebook</p>
                </a>
              </div>
              <div className="text-center">
                No account yet?{" "}
                <Link className="text-blue-500" to={"/register"}>
                  Register Now...
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
