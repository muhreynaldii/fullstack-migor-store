import React, { useState, useEffect } from "react";
import Domisili from "../../components/Domisili/Domisili";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [minyak, setMinyak] = useState([]);

  useEffect(() => {
    getMinyak();
  }, []);

  const getMinyak = async () => {
    const response = await axios.get("http://localhost:5000/admin");
    setMinyak(response.data);
  };

  const deleteMinyak = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/${id}`);
      getMinyak();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div className="mb-2 flex justify-between space-x-4">
          <Domisili />
          <Link to="/admin/tambahdomisili">
            <button className="rounded-sm bg-green-custom px-2 py-1 font-bold text-white">
              Tambah Kecamatan & Kelurahan
            </button>
          </Link>
        </div>
        <div
          className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
        >
          <h1 className="text base py-5 font-bold">Daftar Minyak & Perioda</h1>
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
                            Nama
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Perioda
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Harga
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Stok
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
                        {minyak.map((item, index) => (
                          <tr className="border-b" key={item.id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                              {item.nama}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                              {item.perioda}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                              {item.harga}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                              {item.stok}
                            </td>
                            <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                              <Link
                                to={`/admin/editperioda/${item.id}`}
                                className="text-blue-custom"
                              >
                                Edit
                              </Link>
                              <button
                                className="text-blue-custom"
                                onClick={() => deleteMinyak(item.id)}
                              >
                                Hapus
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Link to="/admin/tambahperioda">
              <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
                Tambah
              </button>
            </Link>
          </div>
        </div>
        <div
          className="container mx-auto my-10 flex
        flex-col items-start bg-white/90 px-7 shadow-lg"
        >
          <h1 className="text base py-5 font-bold">User</h1>
          <div className="h-[180px] w-full bg-gray-custom">
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
                            Id
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
                            Status
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
                            KTRW01
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            rw232022
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Ketua RW 1
                          </td>
                          <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <Link
                              to={"/admin/edituser"}
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
          <div className="flex w-full justify-end">
            <Link to="/admin/tambahuser">
              <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
                Tambah
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
