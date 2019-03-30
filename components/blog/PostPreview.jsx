import React from 'react'
import Link from 'next/link'
import formatDate from 'date-fns/format'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const PostPreview = ({ meta, slug }) => (
  <article className="mb-5">
    <header>
      <h3>
        <Link href={`/blog/${slug}`}>
          <a>{meta.title}</a>
        </Link>
      </h3>
      <small className="small text-muted">
        {formatDate(meta.date, 'dddd, MMMM Do YYYY')} (
        {distanceInWordsToNow(meta.date, {
          addSuffix: true,
        })}
        )
      </small>
    </header>
  </article>
)

export default PostPreview
