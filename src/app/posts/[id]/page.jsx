export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function SinglePost({ params }) {
  const { id } = await params;
  console.log(id);

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return (
    <div className="bg-black h-screen text-center pt-10 ">
      <h1 className="font-black">{post.title}</h1>
      <p className="flex mx-auto pt-5 w-[400px]">{post.body}</p>
    </div>
  );
}

// export const dynamic = "force-dynamic";
// export default async function SinglePost({ params }) {
//   const { id } = params;
//   console.log(id);

//   const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await post.json();

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>{data.body}</p>
//     </div>
//   );
// }
