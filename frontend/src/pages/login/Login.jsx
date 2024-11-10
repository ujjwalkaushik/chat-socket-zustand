import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-gray-500 font-light uppercase">
            Babble
          </span>
        </h1>

        <form>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text">
                        Username
                    </span>
                </label>
                <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
            </div>

            <div>
                <label className="label p-2">
                    <span className="text-base label-text">
                        Password
                    </span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
            </div>

            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                {"Don't"} have an account?
            </a>

            <div>
                <button className="btn btn-block bg-gray-50 text-black btn-sm mt-5 h-10">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
