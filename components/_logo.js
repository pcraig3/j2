import Link from 'next/link'
import { assetPrefix } from '../node-env'
import { css } from 'react-emotion'

const logoStyles = css`
  display: inline-block;
  font-size: 36px;
  margin-bottom: 60px;

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
