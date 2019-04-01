import React from 'react'
import Head from 'next/head'
import { isAfter } from 'date-fns'

const isAprilFools = !isAfter('2019-04-02T00:00:00-0500')
const HeadTitle = ({ title }) => (
  <Head>
    <title>
      {title}
      {title && ' | '}
      {isAprilFools ? 'Stack@Illinois' : 'Queue@Illinois'}
    </title>
  </Head>
)

export default HeadTitle
