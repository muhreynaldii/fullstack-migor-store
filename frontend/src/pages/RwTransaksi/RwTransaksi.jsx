import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swal } from "sweetalert2";
import Header from "./../../components/Header/Header";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";

function RwTransaksi() {
  const [rt, setRt] = useState([]);

  useEffect(() => {
    getRt();
  }, []);

  const getRt = async () => {
    const response = await axios.get("http://localhost:5000/rt");
    setRt(response.data);
  };
  return (
    <>
      <Header />
      <div
        className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <Table namatable={"Daftar Transaksi"}>
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
          Bayar
        </button>
      </div>
      <div
        className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <Table namatable={"Data RT"}>
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
            {rt.map((item, index) => (
              <tr className="border-b" key={item.id}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {item.rt}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {item.ketua}
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
          <Link to="/rw/tambahrt">
            <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
              Tambah
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RwTransaksi;
