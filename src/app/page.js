"use client"; //use for any hooks in project are implimented

import Link from "next/link";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <>
      <p>
        <large>hello world!!</large>
        <br />
        <br />

        <Link href={"/About"}>go to about page</Link>
        <br />
        <br />
        
        <Link href={"/About/Aboutstudents"}>go direct students about page</Link>
        <br />
        <br />
        <button onClick={() => router.push("/About")}>
          click here for go to about page
        </button>
      </p>
    </>
  );
};

export default Page;
