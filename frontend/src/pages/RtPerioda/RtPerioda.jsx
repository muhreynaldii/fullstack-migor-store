import React from "react";
import Header from "./../../components/Header/Header";
import PilihPerioda from "./../../components/PilihPerioda/PilihPerioda";

function RtPerioda() {
  return (
    <>
      <Header />
      <PilihPerioda nama={"Ketua Rt"} link={"/rt/transaksi"} />
    </>
  );
}

export default RtPerioda;
