// async와 await 용어를 쓰도록함
export default async function getAllUsers() {
  // fetch를 통해서
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
