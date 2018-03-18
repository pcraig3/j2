import Head from 'next/head'
import { css, injectGlobal } from 'react-emotion'
import {
  typograpyStyles,
  layoutStyles,
  headerStyles,
  mainStyles,
} from './__styles'
import Logo from './_logo'
import Nav from './_nav'
import Footer from './_footer'

const globalStyles = injectGlobal`
  html {
    font-family: sans-serif;
    text-transform: uppercase;
    overflow-y: scroll;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a,
  a:visited {
    display: inline-block;
    text-decoration: none;
    color: mediumslateblue;
  }

  ${typograpyStyles};
`

const outlineAll = function(outline) {
  return outline === undefined
    ? ``
    : !outline
      ? `* { outline: 1px solid orange;}`
      : `* { outline: 1px solid ${outline};}`
}

export default ({
  children,
  title = 'julia craig dot CA',
  className = css``,
  query = {},
}) => (
  <div
    id="wrapper"
    className={css`
      ${outlineAll(query.outline)} ${layoutStyles};
    `}
  >
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={headerStyles}>
      <Logo />
      <Nav />
    </header>

    <main
      className={css`
        ${mainStyles} ${className};
      `}
    >
      {children}
    </main>

    <Footer />
  </div>
)
