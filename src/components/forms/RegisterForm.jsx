"use client";
import Navbar from "./../layouts/Navbar";
import React, { useState, useRef } from "react";

const RegisterForm = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const name = useRef();
  const address = useRef();
  const phone = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignUp = () => {
    const formData = {
      name: name.current.value,
      address: address.current.value,
      phone: phone.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    let existingUsers = [];
    const storedData = localStorage.getItem("loginData");
    if (storedData) {
      try {
        existingUsers = JSON.parse(storedData);
        if (!Array.isArray(existingUsers)) existingUsers = [];
      } catch (err) {
        console.error("Error parsing localStorage data:", err);
      }
    }

    existingUsers.push(formData);
    localStorage.setItem("loginData", JSON.stringify(existingUsers));

    setModalMessage("Registration Successful");
    setShowModal(true);

    name.current.value = "";
    address.current.value = "";
    phone.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div>
      <Navbar />
      <div className="flex gap-8 justify-center items-center h-screen">
        <div className="border lg:w-[500px] rounded-lg ml-5 mt-4 p-12 h-[500px] shadow-xl shadow-[#0cee97]">
          <h2 className="text-4xl text-center my-4 text-[#04ac58] font-bold">
            SignUp
          </h2>
          <div className="ml-10 mt-4">
            <form>
              <div className="form-control my-3">
                <label className="label">
                  <span className="label-text text-base font-medium">Name</span>
                </label>
                <input
                  ref={name}
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
                    Address
                  </span>
                </label>
                <input
                  ref={address}
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
                    Phone
                  </span>
                </label>
                <input
                  ref={phone}
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
                    Email
                  </span>
                </label>
                <input
                  ref={email}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-[34px]"
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
                  ref={password}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered border border-rose-100 rounded p-1 ml-2"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="button"
                  onClick={handleSignUp}
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

export default RegisterForm;
