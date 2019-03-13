import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "reactstrap";
import Link from "next/link";
import { withRouter } from "next/router";
import { useBoolean } from "react-hanger";

const Header = ({ router }) => {
  const isOpen = useBoolean(false)
  const { route } = router;
  const isBlog = route.startsWith("/blog");
  return (
    <Navbar color="dark" dark expand="md" className="mb-3 fixed-top">
      <Link href="/" passHref>
        <NavbarBrand>Queue@Illinois</NavbarBrand>
      </Link>
      <NavbarToggler onClick={isOpen.toggle} />
      <Collapse isOpen={isOpen.value} navbar>
        <Nav navbar>
          <NavItem active={isBlog}>
            <Link href="/blog" passHref>
              <NavLink>Blog</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
