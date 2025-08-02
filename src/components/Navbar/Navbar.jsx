import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" searchData={searchData} />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
