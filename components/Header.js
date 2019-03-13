import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container,
} from "reactstrap";
import Link from "next/link";
import { withRouter } from "next/router";
import { useBoolean } from "react-hanger";

const Header = ({ router }) => {
  const isOpen = useBoolean(false)
  const { route } = router;
  const isBlog = route.startsWith("/blog");
  return (
    <Navbar color="dark" dark expand="sm" className="mb-3 fixed-top">
      <Container>
        <Link href="/" passHref>
          <NavbarBrand>Queue@Illinois</NavbarBrand>
        </Link>
        <NavbarToggler onClick={isOpen.toggle} />
        <Collapse isOpen={isOpen.value} navbar>
          <Nav navbar className="ml-auto">
            <NavItem active={isBlog}>
              <Link href="/blog" passHref>
                <NavLink>Blog</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Header);
