import React from 'react'
import { MDXProvider } from '@mdx-js/tag'

import Container from '../Container'
import PostDate from './PostDate'
import PostAuthor from './PostAuthor'

import 'prismjs/themes/prism-okaidia.css'
import HeadTitle from '../HeadTitle'
import GenericLink from '../GenericLink'

// Customize mdx components for Bootstrap
const components = {
  a: props => <GenericLink {...props} />,
  h1: props => <h1 className="h2" {...props} />,
  h2: props => <h2 className="h3" {...props} />,
  pre: props => {
    const { className, ...rest } = props
    return <pre className={`mt-0 mb-3 ${className}`} {...rest} />
  },
}

export default meta => ({ children }) => {
  const authors = (meta.authors || []).map((author, idx, authors) => {
    return <PostAuthor {...author} key={author.name} />
  })
  return (
    <MDXProvider components={components}>
      <Container className="mt-3">
        <HeadTitle title={`Blog - ${meta.title}`} />
        <h1 className="text-center h2">{meta.title}</h1>
        <div className="small text-muted text-center">
          <PostDate date={meta.date} />
        </div>
        <div className="my-3 d-flex flex-wrap justify-content-center">
          {authors}
        </div>
        <hr />
        <main>{children}</main>
      </Container>
    </MDXProvider>
  )
}
