import React from "react";
import Header from "./../../components/Header/Header";
import Formulir from "../../components/Formulir/Formulir";

function TambahDomisili() {
  return (
    <>
      <Header />
      <Formulir judul="Tambah Kecamatan dan Kelurahan">
        <form className="my-5 flex flex-col items-center space-y-4">
          <input
            type="text"
            name="kecamatan"
            id="kecamatan"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Kecamatan"
          />
          <input
            type="text"
            name="kelurahan"
            id="kelurahan"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Kelurahan"
          />
          <div className="space-x-14">
            <button className="rounded-sm bg-orange-custom py-2 px-2 text-white">
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

export default TambahDomisili;
