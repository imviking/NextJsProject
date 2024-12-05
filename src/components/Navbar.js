import React from 'react'
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.topnav}>
          <ul>
            <Link href={"/"}>  <li>Home</li>  </Link>
            <Link href={"/views/signup"}> <li>Sign Up</li> </Link>
            <Link href={"/login"}> <li>Login</li>  </Link>
            <Link href={"/blog"}>  <li>BlogPost</li>  </Link>
          </ul>
        </nav>
  )
}

export default Navbar
