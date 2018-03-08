import Link from "next/link";
import { assetPrefix } from '../node-env.js'

export default () => (
  <nav className="point-right">
    <Link href="/about" as={`${assetPrefix}/about`}>
      <a>about</a>
    </Link>
    <Link href="/portfolio" as={`${assetPrefix}/portfolio`}>
      <a>portfolio</a>
    </Link>
    <Link href="/contact" as={`${assetPrefix}/contact`}>
      <a>contact</a>
    </Link>
    <style jsx>{`
      nav {
        display: flex;
        flex-direction: column;
	      align-items: flex-end;
      }
    `}</style>
  </nav>
)
