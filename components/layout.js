import { Component } from 'react'
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
  *:focus {
    outline: 2px solid darkturquoise;
  }
  a,
  a:visited,
  button {
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

class Layout extends Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.state = { showMenu: false, jsEnabled: false }
  }

  componentDidMount() {
    /* state change on load. only triggered when javascript is enabled */
    this.setState(prevState => {
      return { jsEnabled: true }
    })
  }

  onToggle(e) {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu }
    })
  }

  render() {
    const { children, title, className, url: { query, pathname } } = this.props
    return (
      <div
        id="wrapper"
        className={`${this.state.jsEnabled ? 'js-enabled ' : 'no-js '}${css`
          ${outlineAll(query.outline)} ${layoutStyles};
        `}`}
      >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header
          className={`${this.state.showMenu ? 'show-menu ' : 'hide-menu '}${css`
            ${headerStyles};
          `}`}
        >
          <Logo />
          <Nav
            showMenu={this.state.showMenu}
            onToggle={this.onToggle}
            pathname={pathname}
          />
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
  }
}

Layout.defaultProps = {
  children: {},
  title: 'julia craig dot CA',
  className: css``,
  query: {},
}

export default Layout
