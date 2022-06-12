import React from "react";
import { Swal } from "sweetalert2";
import Header from "./../../components/Header/Header";
import { Link } from "react-router-dom";

function RwTransaksi() {
  return (
    <>
      <Header />
      <div
        className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <h1 className="text base py-5 font-bold">Daftar Transaksi</h1>
        <div className="w-full bg-gray-custom">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          RT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          Ketua
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          No transaksi
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          Jumlah pemesanan
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          Status Transaksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          RT 01
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          Jajang
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          2002211101
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          60 ltr
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          ^
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white"
          onClick={() =>
            Swal.fire("Data Berhasil Dikirim ke RW", "", "success")
          }
        >
          Bayar
        </button>
      </div>
      <div
        className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <h1 className="text base py-5 font-bold">Data Rt</h1>
        <div className="w-full bg-gray-custom">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          RT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          Ketua
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          Alamat
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                        >
                          Modify
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          RT 01
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          Jajang
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          Kp. Melayu No 4
                        </td>
                        <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          <Link
                            to={"/admin/editperioda"}
                            className="text-blue-custom"
                          >
                            Edit
                          </Link>
                          <span className="text-blue-custom">Hapus</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/rw/tambahrt">
          <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
            Tambah
          </button>
        </Link>
      </div>
    </>
  );
}

export default RwTransaksi;
