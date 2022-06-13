import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import Formulir from "../../components/Formulir/Formulir";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TambahDomisili() {
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const navigate = useNavigate();

  const postDomisili = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/domisili", {
        kelurahan,
        kecamatan,
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    navigate("/admin");
  };
  return (
    <>
      <Header />
      <Formulir judul="Tambah Kecamatan dan Kelurahan">
        <form
          className="my-5 flex flex-col items-center space-y-4"
          onSubmit={postDomisili}
        >
          <input
            type="text"
            name="kecamatan"
            id="kecamatan"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Kecamatan"
            value={kecamatan}
            onChange={(e) => setKecamatan(e.target.value)}
          />
          <input
            type="text"
            name="kelurahan"
            id="kelurahan"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Kelurahan"
            value={kelurahan}
            onChange={(e) => setKelurahan(e.target.value)}
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

export default TambahDomisili;
