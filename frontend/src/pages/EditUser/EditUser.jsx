import React from "react";
import Container from "../../components/Container/Container";
import "../../App.css";

function EditUser() {
  return (
    <>
      <Container>
        <div className="flex h-screen items-center justify-center">
          <div className="flex h-[400px] w-1/2 flex-col rounded-md bg-gray-custom p-5 shadow-md">
            <h1 className="text-center text-2xl font-bold">Edit User</h1>
            <form className="my-5 flex flex-col items-center space-y-4">
              <input
                type="text"
                name="id"
                id="id"
                className="h-[40px] w-[200px] rounded-sm"
                placeholder="Id"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="h-[40px] w-[200px] rounded-sm"
                placeholder="Password"
              />
              <input
                type="text"
                name="status"
                id="status"
                className="h-[40px] w-[200px] rounded-sm"
                placeholder="Status"
              />
              <div className="space-x-14">
                <button className="rounded-sm bg-orange-custom py-2 px-2 text-white">
                  Cancel
                </button>
                <button className="rounded-sm bg-green-custom py-2 px-2 text-white">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default EditUser;
