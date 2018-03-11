import Link from 'next/link'
import { css } from 'react-emotion'
import { fontSizes, spacing } from './__styles'

const footerStyles = css`
  position: fixed;
    bottom: ${spacing.xxs}px;
    right: ${spacing.xl + spacing.xxs}px; /* 5px extra to account for padding */
    font-size: ${fontSizes.xs}rem;
    font-family: sans-serif;
    text-transform: lowercase;
    opacity: 0.2;
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
