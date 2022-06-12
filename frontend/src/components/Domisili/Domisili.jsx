import React from "react";

function Domisili() {
  return (
    <div className="my-2 space-x-4">
      <select name="kecamatan" id="kecamatan" className="rounded border">
        <option value="1">Antapani</option>
      </select>
      <select name="kelurahan" id="kelurahan" className="rounded border">
        <option value="1">Antapani Kaler</option>
        <option value="2">Antapani Kidul</option>
        <option value="3">Antapani Raya</option>
      </select>
    </div>
  );
}

export default Domisili;
