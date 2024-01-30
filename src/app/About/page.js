//FILE SYSTEM BASED ROUTING IN NEXT JS {BASIC ROUTING}
//NO NEED TO INSTALL ANY EXTERNAL PACKAGE
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <>
      <p>
        <large>ABOUT PAGE ARE HERE!!</large>
        <br />
        <br />
        <Link href={"/About/Aboutstudents"}>click for students about page</Link>

        <br />
        <br />
        <button onClick={() => router.push("/About/Aboutstudents")}>
          click here to the about page for students{" "}
        </button>
      </p>
    </>
  );
};

export default About;
