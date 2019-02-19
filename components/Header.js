import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
      <NavbarBrand>Queue@Illinois</NavbarBrand>
    </Link>
    <a href="https://github.com/illinois/queue">
      <FontAwesomeIcon icon={faGithub} size="lg" className="ml-auto text-light" fixedWidth />
    </a>
  </Navbar>
)
