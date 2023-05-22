import Link from "next/link";

export default function About() {
  // 문제가 생기면 return이 아니라 throw로 던진다. -> return으로 안 들어감.
  // Error라는 생성자 함수를 통해서 문제를 해결
  // 이때, Error는 error.tsx에 있는 컴포넌트를 가져오는데, 신기한건 import할 필요가 없음.
  // throw new Error("Not today!");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
