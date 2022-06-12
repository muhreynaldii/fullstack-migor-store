import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import user from "../../assets/images/user.png";
import cookingOil from "../../assets/images/cooking_oil.png";
import Swal from "sweetalert2";
import Perioda from "./../../components/Perioda/Perioda";

function Warga() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div
          className="mt-10 flex
        h-[249px] flex-row items-start bg-white/90 px-7 shadow-xl"
        >
          <div className="flex w-1/4 flex-col items-center self-center bg-origin-content">
            <img src={user} alt="user" className="w-[160px] p-2" />
            <h1 className="text-center text-base">Bastian</h1>
          </div>
          <div className="flex w-3/4 flex-col items-start">
            <label htmlFor="currentPassword">Password sekarang</label>
            <input
              type="password"
              name="currentPassword"
              id="currentPassword"
              className="mb-10 h-[26px] w-[250px] rounded-sm bg-gray-custom"
            />
            <label htmlFor="newPassword">Password baru</label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="h-[26px] w-[250px] rounded-sm bg-gray-custom"
            />
            <label htmlFor="konfirmNewPassword">Konfirmasi password</label>
            <input
              type="password"
              name="konfirmNewPassword"
              id="konfirmNewPassword"
              className="h-[26px] w-[250px] rounded-sm bg-gray-custom"
            />
            <button
              className="mt-2 rounded-md bg-green-custom py-2 px-3 text-white"
              onClick={() =>
                Swal.fire("Password Berhasil Diubah", "", "success")
              }
            >
              Ubah
            </button>
          </div>
        </div>
        <div
          className="mt-10 flex
        h-[249px] flex-row items-start bg-white/90 px-7 shadow-xl"
        >
          <div className="flex w-1/4 flex-col items-center self-center bg-origin-content">
            <img src={cookingOil} alt="user" className="w-[160px] p-2" />
            <h1 className="text-center text-base">Migor 1 Ltr</h1>
            <span className="text-center text-red-600">Rp. 25.000</span>
          </div>
          <div className="flex w-1/6 flex-col items-center self-center">
            <div className="h-[23px] w-[200px] bg-gray-custom">
              <Perioda />
            </div>
            <div className="my-10 flex space-x-4">
              <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                -
              </button>
              <span>{count}</span>
              <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                +
              </button>
            </div>
            <button className="mt-2 flex rounded-md bg-green-custom py-2 px-3 text-white">
              Pesan
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Warga;
