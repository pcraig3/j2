import Link from 'next/link'
import { assetPrefix } from '../node-env.js'
import { css } from 'react-emotion'

const navStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export default () => (
  <nav className={`point-right ${navStyles}`}>
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
