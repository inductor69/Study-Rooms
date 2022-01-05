import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import HomePlans from '../components/home/HomePlans'
import HomeCountDown from '../components/home/HomeCountDown'
import Perks from '../components/home/Perks'

export default function Home() {
  return (
    <Layout isHomepage={true}>
      <HomeHero />
      <Perks/>
      <HomePlans />
      <HomeCountDown isStatic={false} />
    </Layout>
  )
}
