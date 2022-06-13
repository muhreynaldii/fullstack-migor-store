import React from "react";

function Table(props) {
  return (
    <>
      <h1 className="text base py-5 font-bold">{props.namatable}</h1>
      <div className="w-full bg-gray-custom">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">{props.children}</table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
