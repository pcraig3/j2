import Layout from '../components/layout'
import Img from '../components/img'

export default () => (
  <Layout title="portfolio of julia craig dot CA" h1="Portfolio">
    <h1>Portfolio</h1>
    <Img
      src={require('../img/laiyuhsiang-146977-unsplash.jpg')}
      title="Off to Bate Island"
      year="2013"
    />
    <Img
      src={require('../img/sacha-styles-549087-unsplash.jpg')}
      title="Before the fireworks"
      year="2014"
    />
    <Img
      src={require('../img/sander-wehkamp-579332-unsplash.jpg')}
      title="Fireworks 🎆"
      year="2015"
    />
  </Layout>
)
