import Link from 'next/link'
import { css } from 'react-emotion'

const footerStyles = css`
  position: fixed;
    bottom: 2px;
    right: 64px; /* 4px extra to account for the padding */
    font-size: 11px;
    font-family: sans-serif;
    text-transform: lowercase;
    opacity: 0.25;
  }
  &:hover {
    opacity: .5;
  }
  a {
    color: #d43b1d;
  }
  `

export default () => (
  <footer className={footerStyles}>
    <Link href="https://pcraig3.ca">
      <a>@pcraig3</a>
    </Link>
  </footer>
)
