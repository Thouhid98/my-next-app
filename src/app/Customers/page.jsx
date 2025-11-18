"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { getCustomers } from "@/services/customerService";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setCustomers(data.slice(0, 20));
      } catch (err) {
        console.error("Fetch error:", err);
        setCustomers([]);
      }
    };

    getUsers();
  }, []);

  // const [customers, setCustomers] = useState([]);
  // useEffect(() => {
  //   getCustomers()
  //     .then(setCustomers)
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(customers.length);

  return (
    <div className="p-8 bg-black h-screen">
      <div className="flex flex-wrap gap-6">
        {customers.map((customer) => (
          <Card key={customer.id} className="w-64">
            <CardHeader className="text-black">{customer.id}</CardHeader>
            <CardBody>
              <p className="text-black">
                <span className="text-xl font-bold">Name:</span>{" "}
                {customer.username}
              </p>
              <p className="text-black">
                <span className="text-xl font-bold">Email:</span>{" "}
                {customer.email}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Customers;
