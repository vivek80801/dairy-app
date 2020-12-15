import React from "react";
import navbar from "../../scss/components/layouts/navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
	return <nav className={navbar.navbar}>hello from nav</nav>;
};

export default Navbar;
