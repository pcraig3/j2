import Head from 'next/head'
import { css, injectGlobal } from 'react-emotion'
import {
  globalStyles,
  layoutStyles,
  headerStyles,
  mainStyles,
} from './__styles'
import Logo from './_logo'
import Nav from './_nav'
import Footer from './_footer'

injectGlobal`
  ${globalStyles}
`

export default ({
  children,
  title = 'julia craig dot CA',
  className = css``,
}) => (
  <div id="wrapper" className={layoutStyles}>
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
