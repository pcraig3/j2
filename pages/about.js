import Layout from '../components/layout'

export default ({ url }) => (
  <Layout title="about julia craig dot CA" query={url.query}>
    <div>
      <p>
        My name is Julia Craig and I am a <em>genius</em>.
      </p>
    </div>
  </Layout>
)
