import "./login.css"
import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <div>
      {/* <h1>comman layout for login page</h1> */}
          <ul className="main-container">
              <h4>login layout</h4>
        <li>
          <Link href={"/Login"}>Login</Link>
        </li>
        <li>
          <Link href={"/Login/studentlogin"}>Student Login</Link>
        </li>
        <li>
          <Link href={"/Login/collegelogin"}>College Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
