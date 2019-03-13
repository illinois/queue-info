import React from "react";
import Link from "next/link";

const PostPreview = ({ meta, slug }) => (
  <article>
    <header>
      <h3><Link href={`/blog/${slug}`}>{meta.title}</Link></h3>
    </header>
  </article>
);

export default PostPreview;
