import React from "react";
import Header from "./../../components/Header/Header";
import PilihPerioda from "./../../components/PilihPerioda/PilihPerioda";

function RwPerioda() {
  return (
    <>
      <Header />
      <PilihPerioda nama={"Ketua Rw"} link={"/rw/transaksi"} />
    </>
  );
}

export default RwPerioda;
