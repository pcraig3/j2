import Head from 'next/head'
import { injectGlobal } from 'react-emotion'

import Logo from './_logo'
import Nav from './_nav'
import Footer from './_footer'

injectGlobal`
  html {
    font-family: sans-serif;
    font-size: 24px;
    text-transform: uppercase;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: flex-start;

    margin: 60px;
  }
  header {
    flex: 1;
    text-align: right;
  }
  header a,
  header span {
    padding: 0 4px;
  }
  main {
    flex: 3;
    margin-right: 60px;
  }
  main div {
    margin-bottom: 30px;
  }

  a, a:visited {
    display: inline-block;
    text-decoration: none;
    color: mediumslateblue;
  }
  nav a:hover,
  nav a:focus,
  main a:hover,
  main a:focus {
    background-color: bisque;
  }
  .point-right a::before {
    content: "☞\00a0";
  }
  .point-left a::after {
    content: "\00a0☜";
  }
  .point-right a::before,
  .point-left a::after {
    visibility: hidden;
  }
  .point-right a:hover::before,
  .point-right a:focus::before,
  .point-left a:hover::after,
  .point-left a:focus::after {
    visibility: visible;
  }
`

export default ({ children, title = 'julia craig dot CA', className = '' }) => (
  <div id="wrapper">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Logo />
      <Nav />
    </header>

    <main className={className}>{children}</main>

    <Footer />
  </div>
)
