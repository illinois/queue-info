import React from 'react'
import Head from 'next/head'
import PostPreview from '../../components/blog/PostPreview'
import Container from '../../components/Container'
import HeadTitle from '../../components/HeadTitle'

function importAll(r) {
  return r.keys().map(key => {
    return {
      post: r(key),
      slug: /\.\/(.*)\.mdx/.exec(key)[1],
    }
  })
}

const blogItemsMeta = importAll(require.context('.', false, /\.mdx$/))

const dateSortDesc = (a, b) => {
  const date1 = new Date(a.post.meta.date)
  const date2 = new Date(b.post.meta.date)
  if (date1 > date2) return -1
  if (date1 < date2) return 1
  return 0
}

const items = blogItemsMeta.sort(dateSortDesc).map(({ post, slug }) => {
  return <PostPreview meta={post.meta} slug={slug} key={slug} />
})

const BlogIndex = () => (
  <Container>
    <HeadTitle title="Blog" />
    <h1 className="text-center my-5">Blog</h1>
    {items}
  </Container>
)

export default BlogIndex

export { blogItemsMeta }
