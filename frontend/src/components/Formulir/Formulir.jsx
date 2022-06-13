import React from "react";
import Container from "./../Container/Container";

function Formulir(props) {
  return (
    <Container>
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[400px] w-1/2 flex-col rounded-md bg-gray-custom p-5 shadow-md">
          <h1 className="text-center text-2xl font-bold">{props.judul}</h1>
          {props.children}
        </div>
      </div>
    </Container>
  );
}

export default Formulir;
