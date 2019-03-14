import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import Header from '../components/Header'

const TIMEOUT = 200

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <Header />
        <PageTransition timeout={TIMEOUT} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style global jsx>{`
          html {
            height: 100%;
          }
          body {
            min-height: 100%;
            position: relative;
            padding-top: 56px;
            padding-bottom: 5rem;
            -webkit-font-smoothing: antialiased;
          }
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .indicator-appear,
          .indicator-enter {
            opacity: 0;
          }
          .indicator-appear-active,
          .indicator-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
        `}</style>
      </Container>
    )
  }
}
