import React from "react";
import bg from "../../assets/images/bg_login.png";

function Login() {
  return (
    <div
      className="h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-origin-border"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto my-12 flex h-[546px] w-[451px] flex-col self-center rounded-md bg-[#FFFDFDCF] p-10 shadow-lg">
        <h1 className="text-center text-2xl text-black">Login</h1>
        <div className="flex flex-col justify-center space-y-2 pt-14">
          <label htmlFor="username" className="py-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="h-[53px] rounded-sm bg-grey-custom"
          />
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-[53px] rounded-sm bg-grey-custom"
          />
        </div>
        <div className="mt-14 flex justify-between">
          <button className="w-[120px] bg-orange-custom px-3 py-2 text-base font-normal text-white">
            Cancel
          </button>
          <button className="w-[120px] bg-green-custom px-3 py-2 text-base font-normal text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
