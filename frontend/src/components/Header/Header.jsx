import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <button className="h-[44px] w-screen bg-orange-custom text-center text-white">
          Logout
        </button>
      </Link>
      <h1 className="pt-11 text-center text-2xl font-bold">Migor Store</h1>
      <h2 className="text-center text-xl">Toko migor online bersubsidi</h2>
    </header>
  );
}

export default Header;
