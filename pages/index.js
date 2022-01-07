import Layout from '../components/Layout'
import HomeHero from '../components/home/HomeHero'
import HomePlans from '../components/home/HomePlans'
import HomeCountDown from '../components/home/HomeCountDown'
import Perks from '../components/home/Perks'
import Institutions from '../components/home/Institutions'
import DashBoard from '../components/dashboard/dashboard'

export default function Home() {
  return (
    <Layout isHomepage={true}>
      <HomeHero />
      <Perks/>
      <Institutions/>
      <HomePlans />
      <HomeCountDown isStatic={false} />
    </Layout>
  )
}