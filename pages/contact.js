import Link from 'next/link'
import { css } from 'react-emotion'
import { spacing, pointLeftLinks } from '../components/__styles'
import Layout from '../components/layout'

const mainStyles = css`
  span {
    display: block;
    margin-bottom: ${spacing.xxs}px;
  }

  a {
    padding-left: ${spacing.xxs}px;
    padding-right: ${spacing.xxs}px;
    margin-left: -${spacing.xxs}px;
  }

  ${pointLeftLinks};
`
export default ({ url }) => (
  <Layout title="contact julia craig dot CA" className={mainStyles} url={url}>
    <p>
      <span>Email</span>
      <span>
        <Link href="mailto:juliacraig3@cmail.carleton.ca">
          <a title="pls no spam">
            juliacraig3<wbr />@cmail.carleton.ca
          </a>
        </Link>
      </span>
    </p>
    <p>
      <span>Twitter</span>
      <span>
        <Link href="https://twitter.com/JayCraig1101">
          <a title="pls tweet at me">@JayCraig1101</a>
        </Link>
      </span>
    </p>
    <p>
      <span>Facebook</span>
      <span>
        <Link href="https://www.facebook.com/julia.craig.904">
          <a title="pls be my friend">julia.craig.904</a>
        </Link>
      </span>
    </p>
  </Layout>
)
