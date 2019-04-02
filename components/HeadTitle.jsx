import React from 'react'
import Head from 'next/head'

const HeadTitle = ({ title }) => (
  <Head>
    <title>
      {title}
      {title && ' | '}Queue@Illinois
    </title>
  </Head>
)

export default HeadTitle
