import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Formulir from "../../components/Formulir/Formulir";

function EditPerioda() {
  const [nama, setNama] = useState("");
  const [perioda, setPerioda] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMinyakById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateMinyak = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/admin/${id}`, {
        nama,
        perioda,
        harga,
        stok,
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

  const getMinyakById = async () => {
    const response = await axios.get(`http://localhost:5000/admin/${id}`);
    setNama(response.data.nama);
    setPerioda(response.data.perioda);
    setHarga(response.data.harga);
    setStok(response.data.stok);
  };

  return (
    <>
      <Formulir judul={"Edit Perioda"}>
        <form
          className="my-5 flex flex-col items-center space-y-4"
          onSubmit={updateMinyak}
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
            type="date"
            name="periodaawal"
            id="periodaawal"
            className="h-[40px] w-[200px] rounded-sm"
            value={perioda}
            onChange={(e) => setPerioda(e.target.value)}
          />
          <input
            type="number"
            name="harga"
            id="harga"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
          <input
            type="number"
            name="stok"
            id="stok"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
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
              Edit
            </button>
          </div>
        </form>
      </Formulir>
    </>
  );
}

export default EditPerioda;
