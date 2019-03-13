import React from "react";
import { Container } from "reactstrap";
import PostPreview from "../../components/blog/PostPreview";

function importAll(r) {
  return r.keys().map(key => {
    return {
      post: r(key),
      slug: /\.\/(.*)\.mdx/.exec(key)[1]
    };
  });
}

const blogItemsMeta = importAll(require.context(".", false, /\.mdx$/));

const items = blogItemsMeta.map(({ post, slug }) => {
  return (
    <PostPreview meta={post.meta} slug={slug} key={slug} />
  );
});

const BlogIndex = () => (
  <Container>
    <h1 className="display-1 mb-5">Blog</h1>
    {items}
  </Container>
);

export default BlogIndex;
