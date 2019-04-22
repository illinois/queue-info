import React from 'react'
import NextLink from 'next/link'

const GenericLink = props => {
  if (!props.href.startsWith('http://') && !props.href.startsWith('http://')) {
    return <InternalLink {...props} />
  } else {
    return <OtherLink {...props} />
  }
}

const InternalLink = ({ href, children }) => (
  <NextLink href={href}>
    <a>{children}</a>
  </NextLink>
)

const OtherLink = ({ href, children }) => <a href={href}>{children}</a>

export default GenericLink
