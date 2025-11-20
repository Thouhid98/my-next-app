"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";

const UserList = () => {
  const [savedUser, setSavedUser] = useState([]);

  useEffect(() => {
    const data = localStorage?.getItem("loginData") || [];
    if (data) {
      setSavedUser(JSON.parse(data));
    }
  }, []);

  return (
    <div className="p-8 bg-black pl-20 h-screen">
      <div className="flex flex-wrap gap-6">
        {savedUser?.map((customer) => (
          <Card key={customer.name} className="w-64">
            <CardHeader
              className="text-2xl text-amber-900  font-bold  -mb-4
            "
            >
              {customer.name}
            </CardHeader>
            <CardBody>
              <p className="text-black">
                <span className="text-xl font-bold">Name:</span>{" "}
                {customer.address}
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

export default UserList;
