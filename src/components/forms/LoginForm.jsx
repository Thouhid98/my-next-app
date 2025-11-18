"use client";

import React, { useState } from "react";
import Navbar from "./../layouts/Navbar";

const LoginForm = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();

    const savedData = JSON.parse(localStorage.getItem("loginData")) || [];

    if (savedData.length === 0) {
      setModalMessage("No user found");
      setShowModal(true);
      return;
    }

    const user = savedData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setModalMessage("Login Successful");
      setShowModal(true);
    } else {
      setModalMessage("Invalid user");
      setShowModal(true);
    }
  };

  return (
    <div className="w-full">
      <div>
        <Navbar />
        <div className="flex gap-8 justify-center items-center h-screen">
          <div className=""></div>
          <div className="border lg:w-[500px] rounded-lg p-12 h-[450px]">
            <h2 className="text-4xl text-center my-4 text-[#444444] font-bold">
              Login
            </h2>
            <div className="mt-10">
              <form onSubmit={handleLogin}>
                <div className="form-control mt">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Email :
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

                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Password :
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered border border-rose-100 rounded p-1 ml-2"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded text-sm px-4 py-2.5 focus:outline-none"
                  >
                    Success
                  </button>
                </div>
              </form>
            </div>
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

export default LoginForm;
