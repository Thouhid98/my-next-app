"use client";
import Navbar from "./../layouts/Navbar";
import React, { useState } from "react";

const registerForm = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();

    const formData = {
      name,
      address,
      phone,
      email,
      password,
    };

    let existingUsers = [];
    try {
      const storedData = localStorage.getItem("loginData");
      if (storedData) {
        existingUsers = JSON.parse(storedData);
        if (!Array.isArray(existingUsers)) {
          existingUsers = [];
        }
      }
    } catch (err) {
      console.error("Error parsing localStorage data:", err);
    }

    existingUsers.push(formData);
    localStorage.setItem("loginData", JSON.stringify(existingUsers));
    setModalMessage("Registration Successful");
    setShowModal(true);
  };
  return (
    <div>
      <Navbar />
      <div className="flex  gap-8 justify-center items-center h-screen">
        <div className="border lg:w-[500px] rounded-lg ml-5 mt-4 p-12 h-[500px] ">
          <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">
            SignUp
          </h2>
          <div className="ml-10 mt-4">
            <form onSubmit={handleSignUp}>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Name{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-9"
                  required
                />
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Address{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-5"
                  required
                />
              </div>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Phone{" "}
                  </span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-8"
                  required
                />
              </div>

              <div className="form-control ml-1 my-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Email{" "}
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-9"
                  required
                />
              </div>

              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text text-base font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-3"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded text-sm px-4 py-2.5 focus:outline-none"
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
              <p className="text-lg text-black font-medium mb-4">
                {modalMessage}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default registerForm;
