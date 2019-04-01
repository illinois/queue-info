import React, { useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Container,
} from 'reactstrap'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useBoolean } from 'react-hanger'
import { isAfter } from 'date-fns'

const Header = ({ router }) => {
  const isOpen = useBoolean(false)
  const { route } = router
  useEffect(() => {
    router.events.on('routeChangeStart', isOpen.setFalse)
    return () => {
      router.events.off('routeChangeStart', isOpen.setFalse)
    }
  })
  const isBlog = route.startsWith('/blog')
  let brandText
  if (isAfter('2019-04-02T00:00:00-0500')) {
    // Back to normal branding until we can rip this out
    brandText = 'Queue@Illinois'
  } else {
    // April Fools'!
    brandText = (
      <>
        <span style={{ textDecoration: 'line-through' }}>Queue</span>
        Stack@Illinois
      </>
    )
  }
  return (
    <Navbar color="dark" dark expand="sm" className="mb-3 fixed-top">
      <Container>
        <Link href="/" passHref>
          <NavbarBrand>{brandText}</NavbarBrand>
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
  )
}

export default withRouter(Header)
