import React, { useState } from "react";
import bg from "../../assets/images/bg_login.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div
      className="h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-origin-border"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto my-12 flex h-[546px] w-[451px] flex-col self-center rounded-md bg-[#FFFDFDCF] p-10 shadow-lg">
        <h1 className="text-center text-2xl text-black">Login</h1>
        <form
          onSubmit={Auth}
          className="flex flex-col justify-center space-y-2 pt-14"
        >
          <p className="my-2 text-center">{msg}</p>
          <label htmlFor="username" className="py-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-grey-custom h-[53px] rounded-sm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-grey-custom h-[53px] rounded-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-14 flex justify-between">
            <button className="w-[120px] bg-green-custom px-3 py-2 text-base font-normal text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
