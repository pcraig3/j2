import Link from 'next/link'
import { css } from 'react-emotion'
import { assetPrefix } from '../node-env'
import { fontSizes, mq, spacing } from './__styles'

const logoStyles = css`
  position: fixed;
  bottom: ${spacing.sm}px;
  left: ${spacing.sm}px;
  display: inline-block;
  font-size: ${fontSizes.lg}rem;

  .show-menu & {
    display: none;
  }

  ${mq.xs(css`
    left: ${spacing.md}px;
  `)};

  ${mq.sm(css`
    position: static;
    bottom: initial;
    left: initial;
    margin-bottom: ${spacing.xl}px;

    .show-menu & {
      display: inline-block;
    }
  `)};

  .js-enabled & br {
    display: none;

    ${mq.sm(css`
      display: initial;
    `)};
  }

  & a,
  & a:visited {
    padding: 0;
    color: black;
  }

  & a:hover,
  & a:focus {
    background-color: inherit;
  }
  & a span {
    padding: 0 ${spacing.xxs}px;
    display: inline-block;
    background-color: bisque;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
  }
  & a:hover span,
  & a:focus span {
    color: mediumslateblue;
    background-color: white;
    border-bottom: 2px solid mediumslateblue;
    border-right: 2px solid mediumslateblue;
  }
`
export default () => (
  <div className={logoStyles}>
    <Link href="/" as={`${assetPrefix}/`}>
      <a>
        <span>julia</span>
        <br />
        <span>craig</span>
      </a>
    </Link>
  </div>
)
