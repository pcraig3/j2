import Link from 'next/link'
import { pointLeftLinks } from '../components/__styles'
import Layout from '../components/layout'
import { css } from 'react-emotion'

const mainStyles = css`
  a {
    padding-left: 4px;
    padding-right: 4px;
    margin-left: -4px;
  }

  ${pointLeftLinks};
`
export default () => (
  <Layout title="contact julia craig dot CA" className={mainStyles}>
    <div>
      <p>Email</p>
      <p>
        <Link href="mailto:juliacraig3@cmail.carleton.ca">
          <a title="pls no spam">juliacraig3@cmail.carleton.ca</a>
        </Link>
      </p>
    </div>
    <div>
      <p>Twitter</p>
      <p>
        <Link href="https://twitter.com/JayCraig1101">
          <a title="pls tweet at me">@JayCraig1101</a>
        </Link>
      </p>
    </div>
    <div>
      <p>Facebook</p>
      <p>
        <Link href="https://www.facebook.com/julia.craig.904">
          <a title="pls be my friend">julia.craig.904</a>
        </Link>
      </p>
    </div>
  </Layout>
)
