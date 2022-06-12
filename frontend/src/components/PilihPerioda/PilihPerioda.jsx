import React from "react";
import Perioda from "./../Perioda/Perioda";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";

function PilihPerioda(props) {
  return (
    <div
      className="mt-10 flex
        h-[249px] flex-row items-start bg-white/90 px-7 shadow-xl"
    >
      <div className="flex w-1/4 flex-col items-center self-center bg-origin-content">
        <img src={user} alt="user" className="w-[160px] p-2" />
        <h1 className="text-center text-base">{props.nama}</h1>
      </div>
      <div className="flex w-1/5 flex-col items-start">
        <label htmlFor="perioda" className="mb-5 text-center">
          Pilih periode
        </label>
        <div className="flex space-x-4">
          <Perioda />
          <Link to={props.link}>
            <button className="mt-2 rounded-md bg-green-custom py-2 px-3 text-white">
              Cek
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PilihPerioda;
