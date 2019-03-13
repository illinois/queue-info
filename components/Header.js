import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "reactstrap";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Link href="/" passHref>
        <NavbarBrand>Queue@Illinois</NavbarBrand>
      </Link>
      <Collapse isOpen={true}>
        <Nav navbar>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Docs</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
