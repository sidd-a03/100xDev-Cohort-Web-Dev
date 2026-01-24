import Link from "next/dist/client/link";


export default function Home() {
  return (
    <div className="text-lg w-screen">
      Todo Application
      <br/>
      <Link href={"/signin"}>Sign In</Link>
      <br/>
      <Link href={"/signup"}>Sign Up</Link>
    </div>
  );
}
