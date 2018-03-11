import Link from 'next/link'
import { css } from 'react-emotion'
import { assetPrefix } from '../node-env'
import { spacing, bisqueLinks, pointRightLinks } from './__styles'

const navStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  a {
    margin-bottom: ${spacing.xxs}px;
  }

  ${bisqueLinks};
  ${pointRightLinks};
`

export default () => (
  <nav className={navStyles}>
    <Link href="/about" as={`${assetPrefix}/about`}>
      <a>about</a>
    </Link>
    <Link href="/portfolio" as={`${assetPrefix}/portfolio`}>
      <a>portfolio</a>
    </Link>
    <Link href="/contact" as={`${assetPrefix}/contact`}>
      <a>contact</a>
    </Link>
  </nav>
)
