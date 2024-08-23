import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
// import Logo from "../Logo/Logo";
import logo from "../assets/logo.png"
// import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        {/* <Logo /> */}
        <img src="./assests/logo.png" alt="" />
      </Link>
      {/* <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      /> */}
      {/* <Button>Give Feedback</Button> */}
    </nav>
  );
}

export default Navbar;
