import React from "react";
import Header from "./../../components/Header/Header";
import Container from "./../../components/Container/Container";
import PilihPerioda from "./../../components/PilihPerioda/PilihPerioda";

function DashboardKepalaDinper() {
  return (
    <>
      <Header />
      <Container>
        <PilihPerioda nama={"Kepala Dinper"} link={"/kepaladinper/data"} />
      </Container>
    </>
  );
}

export default DashboardKepalaDinper;
