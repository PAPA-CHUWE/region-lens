import Image from "next/image";
import SignIn from "./(pages)/auth/signin/page";

export default function Home() {
  return (
    <div className="w-screen h-full">
      <SignIn />
    </div>
  );
}
