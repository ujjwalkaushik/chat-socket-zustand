import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: null,
    password: null,
  });

  const { loading, login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          <span className="text-gray-500 font-light uppercase">Babble</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button disabled={loading} className="btn btn-block bg-gray-50 text-black btn-sm mt-5 h-10">
                {loading ? <span className="loading loading-spinner"></span> : "Login" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
