import React from "react";
import Formulir from "../../components/Formulir/Formulir";

function TambahRt() {
  return (
    <>
      <Formulir judul="Tambah RT">
        <form className="my-5 flex flex-col items-center space-y-4">
          <input
            type="text"
            name="rt"
            id="rt"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="RT"
          />
          <input
            type="text"
            name="nama"
            id="nama"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Nama"
          />
          <input
            type="text"
            name="id"
            id="id"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="ID"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="h-[40px] w-[200px] rounded-sm"
            placeholder="Password"
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

export default TambahRt;
