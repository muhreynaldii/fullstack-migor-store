import React from "react";
import Container from "./../../components/Container/Container";

function TambahRt() {
  return (
    <>
      <Container>
        <div className="flex h-screen items-center justify-center">
          <div className="flex h-[400px] w-1/2 flex-col rounded-md bg-gray-custom p-5 shadow-md">
            <h1 className="text-center text-2xl font-bold">Tambah RT</h1>
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
          </div>
        </div>
      </Container>
    </>
  );
}

export default TambahRt;
