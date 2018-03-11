import Link from 'next/link'
import { assetPrefix } from '../node-env'
import { css } from 'react-emotion'
import { bisqueLinks, pointRightLinks } from './__styles'

const navStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

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
