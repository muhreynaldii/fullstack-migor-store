import React from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Domisili from "../../components/Domisili/Domisili";
import Perioda from "../../components/Perioda/Perioda";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const data = {
  labels: ["RW01", "RW02", "RW03", "RW04", "RW05"],
  datasets: [
    {
      label: "Jumlah Minyak (Liter)",
      data: [21, 10, 7, 8, 4],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function DataKepalaDinper() {
  return (
    <>
      <Header />
      <Container>
        <div
          className="mb-10 flex
        flex-col items-start bg-white/90 px-7 shadow-lg"
        >
          <Domisili />
          <div className=" h-[180px] w-full bg-white">
            <h1>Laporan Penjualan</h1>
            <table>
              <tr>table</tr>
            </table>
          </div>
        </div>
        <div
          className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
        >
          <div className="mb-10 w-full bg-white">
            <Perioda />
            <h1 className="text-center text-2xl font-bold">
              Laporan Penjualan Migor
            </h1>
            <Bar data={data} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default DataKepalaDinper;
