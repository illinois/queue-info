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
import { withRouter } from "next/router";

const Header = ({ router }) => {
  console.log(router.route);
  const { route } = router;
  const isBlog = route.startsWith("/blog");
  return (
    <Navbar color="dark" dark expand="md">
      <Link href="/" passHref>
        <NavbarBrand>Queue@Illinois</NavbarBrand>
      </Link>
      <Collapse isOpen={true}>
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
