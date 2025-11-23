import Users from "@/components/layouts/Users";
import React from "react";

const page = ({ users }) => {
  return (
    <div>
      <Users />
    </div>
  );
};

export default page;

// import React from "react";

// export default async function user() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//     cache: "force-cache",
//   });
//   const customers = await res.json();

//   return (
// <div className="p-8 bg-black  h-screen">
//   <h1 className="text-3xl font-bold text-center mt-10 mb-10">
//     Example of Static Site Generation
//   </h1>
//   <div className="flex flex-wrap justify-center items-center   gap-6">
//     {customers.map((customer) => (
//       <div key={customer.id} className=" w-[300px]  bg-white p-4 rounded">
//         <p className="text-black">
//           <span className="text-xl font-bold">Name:</span>{" "}
//           {customer.username}
//         </p>

//         <p className="text-black">
//           <span className="text-xl font-bold">Email:</span> {customer.email}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>
//   );
// }

// export const dynamic = "force-dynamic";
// import { connectToDatabase } from "@/lib/mongodb";
// export default async function user() {
//   const db = await connectToDatabase();
//   const users = await db.collection("users").find().toArray();

//   return (
//     <div className="p-8 bg-black  h-screen">
//       <h1 className="text-3xl font-bold text-center">Users </h1>
//       <div className="flex justify-center items-center gap-2 mt-5">
//         {users.map((user) => (
//           <li className="flex " key={user._id}>
//             {user.name}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// }
