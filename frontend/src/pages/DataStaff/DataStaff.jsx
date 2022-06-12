import React from "react";
import Domisili from "../../components/Domisili/Domisili";
import Header from "../../components/Header/Header";
import Container from "./../../components/Container/Container";

function DataStaff() {
  return (
    <>
      <Header />
      <Container>
        <div
          className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
        >
          <Domisili />
          <div className="h-[180px] w-full bg-white">
            <div className="w-full bg-gray-custom">
              <h1 className="font-bold">Daftar Transaksi</h1>
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
                              Rw
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
                              No transaksi
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
                              RW 01
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                              Bastian
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
          </div>
        </div>
      </Container>
    </>
  );
}

export default DataStaff;
