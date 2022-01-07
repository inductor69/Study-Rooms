import DashBoard from "../components/dashboard/dashboard"
import Layout from '../components/Layout'

export default function dashboard() {


    return (
        <Layout isDashBoard={true} >
            <DashBoard/>

        </Layout>
    )
}