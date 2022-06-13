import React from "react";
import Formulir from "../../components/Formulir/Formulir";
import Header from "../../components/Header/Header";

function UploadBukti() {
  return (
    <>
      <Header />
      <Formulir judul="Upload Bukti Pembayaran">
        <form className="my-5 flex flex-col items-center space-y-4">
          <input
            type="file"
            name="bukti"
            id="bukti"
            className="w-[200px] rounded-sm bg-white"
            placeholder="Upload Bukti"
          />
          <div className="space-x-14">
            <button className="rounded-sm bg-orange-custom py-2 px-2 text-white">
              Cancel
            </button>
            <button className="rounded-sm bg-green-custom py-2 px-2 text-white">
              Upload
            </button>
          </div>
        </form>
      </Formulir>
    </>
  );
}

export default UploadBukti;
