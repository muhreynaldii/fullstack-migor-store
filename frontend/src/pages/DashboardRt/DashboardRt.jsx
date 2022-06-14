import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./../../components/Header/Header";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Table from "./../../components/Table/Table";

function DashboardRt() {
  const [warga, setWarga] = useState([]);

  useEffect(() => {
    getWarga();
  }, []);

  const getWarga = async () => {
    const response = await axios.get("http://localhost:5000/warga");
    setWarga(response.data);
  };

  return (
    <>
      <Header />
      <div
        className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <Table namatable={"Daftar Transaksi Warga"}>
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
                Nama
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
                Jumlah Pemesanan
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
                Bastian
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                Kp. Melayu No 1
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                5 ltr
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                <input type="checkbox" name="status" id="status" />
              </td>
            </tr>
          </tbody>
        </Table>
        <button
          className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white"
          onClick={() =>
            Swal.fire("Data Berhasil Dikirim ke RW", "", "success")
          }
        >
          Kirim
        </button>
      </div>
      <div
        className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <Table namatable={"Daftar Warga"}>
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
                Nama
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-bold text-gray-900"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-bold text-gray-900"
              >
                Password
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm font-bold text-gray-900"
              >
                Alamat
              </th>
            </tr>
          </thead>
          <tbody>
            {warga.map((item, index) => (
              <tr className="border-b" key={item.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {item.nama}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {item.username}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {item.password}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {item.alamat}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="flex w-full justify-end">
          <Link to="/rt/tambahwarga">
            <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
              Tambah
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DashboardRt;
