import Layout from '../components/layout'

export default ({ url }) => (
  <Layout query={url.query}>
    <div>
      <p>Hello there thank you for visiting my website.</p>
    </div>
  </Layout>
)
