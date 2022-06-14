import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Formulir from "../../components/Formulir/Formulir";

function TambahRt() {
  const [rt, setRt] = useState("");
  const [ketua, setKetua] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();

  const saveRt = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/rt", {
        rt,
        ketua,
        username,
        password,
        alamat,
      });
      navigate("/rw/transaksi");
    } catch (error) {
      console.log(error);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    navigate("/rw/transaksi");
  };
  return (
    <>
      <Formulir judul="Tambah RT">
        <form
          className="my-5 flex flex-col items-center space-y-4"
          onSubmit={saveRt}
        >
          <input
            type="text"
            name="rt"
            id="rt"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder=" Nama RT"
            value={rt}
            onChange={(e) => setRt(e.target.value)}
          />
          <input
            type="text"
            name="nama"
            id="nama"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Nama Ketua"
            value={ketua}
            onChange={(e) => setKetua(e.target.value)}
          />
          <input
            type="text"
            name="username"
            id="username"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Usernamea"
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
            name="alamat"
            id="alamat"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
          <div className="space-x-14">
            <button
              className="rounded-sm bg-orange-custom py-2 px-2 text-white"
              onClick={reset}
            >
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
      </Formulir>
    </>
  );
}

export default TambahRt;
