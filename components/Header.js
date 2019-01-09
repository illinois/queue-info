import React from 'react'

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap'
import Link from 'next/link'

export default () => (
  <Navbar
    color="dark"
    dark
  >
    <Link href="/" passHref>
      <NavbarBrand>Queues@Illinois</NavbarBrand>
    </Link>
  </Navbar>
)
