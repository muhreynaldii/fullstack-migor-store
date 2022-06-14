import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Formulir from "../../components/Formulir/Formulir";

function TambahWarga() {
  const [nama, setNama] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();

  const saveWarga = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/warga", {
        nama,
        username,
        password,
        alamat,
      });
      navigate("/rt/transaksi");
    } catch (error) {
      console.log(error);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    navigate("/rt/transaksi");
  };
  return (
    <>
      <Formulir judul="Tambah Warga">
        <form
          className="my-5 flex flex-col items-center space-y-4"
          onSubmit={saveWarga}
        >
          <input
            type="text"
            name="nama"
            id="nama"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
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
            <button className="rounded-sm bg-green-custom py-2 px-2 text-white">
              Tambah
            </button>
          </div>
        </form>
      </Formulir>
    </>
  );
}

export default TambahWarga;
