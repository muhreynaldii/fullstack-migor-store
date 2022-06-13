import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Formulir from "../../components/Formulir/Formulir";

function EditUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUsersById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        username,
        password,
        status,
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setUsername(response.data.username);
    setPassword(response.data.password);
    setStatus(response.data.status);
  };

  return (
    <>
      <Formulir judul={"Edit User"}>
        <form
          className="my-5 flex flex-col items-center space-y-4"
          onSubmit={updateUsers}
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
            type="password"
            name="password"
            id="password"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            name="status"
            id="status"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Status"
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
              Edit
            </button>
          </div>
        </form>
      </Formulir>
    </>
  );
}

export default EditUser;
