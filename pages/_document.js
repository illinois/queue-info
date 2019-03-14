import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { dom } from '@fortawesome/fontawesome-svg-core'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/png" />
          <meta property="og:url" content="https://queue.illinois.edu" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Queue@Illinois" />
          <meta
            property="og:image"
            content="https://queue.illinois.edu/static/opengraph.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="400" />
          <meta
            property="og:description"
            content="The queue allows students, instructors, advisors, and more to be productive and utilize their time more effectively."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/static/opengraph.png" />
          <style>{dom.css()}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
