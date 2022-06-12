import React, { useState } from "react";
import Container from "../../components/Container/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TambahUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const saveUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        username,
        password,
        status,
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <div className="flex h-screen items-center justify-center">
          <div className="flex h-[400px] w-1/2 flex-col rounded-md bg-gray-custom p-5 shadow-md">
            <h1 className="text-center text-2xl font-bold">Tambah User</h1>
            <form
              className="my-5 flex flex-col items-center space-y-4"
              onSubmit={saveUsers}
            >
              <input
                type="text"
                name="username"
                id="username"
                className="h-[40px] w-[200px] rounded-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                name="password"
                id="password"
                className="h-[40px] w-[200px] rounded-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                name="nama"
                id="nama"
                className="h-[40px] w-[200px] rounded-sm"
                placeholder="Nama"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
              <div className="space-x-14">
                <button className="rounded-sm bg-orange-custom py-2 px-2 text-white">
                  Cancel
                </button>
                <button
                  className="rounded-sm bg-green-custom py-2 px-2 text-white"
                  type="submit"
                >
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TambahUser;
