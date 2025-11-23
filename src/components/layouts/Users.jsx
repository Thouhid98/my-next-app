const Users = ({ users }) => {
  return (
    <div className="p-8 bg-black  h-screen">
      <h1 className="text-3xl font-bold text-center mt-10 mb-10">
        Example of Static Site Generation
      </h1>
      <div className="flex flex-wrap justify-center items-center   gap-6">
        {users?.map((user) => (
          <div key={user.id} className=" w-[300px]  bg-white p-4 rounded">
            <p className="text-black">
              <span className="text-xl font-bold">Name:</span> {user.username}
            </p>

            <p className="text-black">
              <span className="text-xl font-bold">Email:</span> {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

// export async function getStaticPrpos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: { users },
//   };
// }
