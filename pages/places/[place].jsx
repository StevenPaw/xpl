import { useRouter } from 'next/router'
import Layout from '../../components/organisms/layout'
 
export default function Place() {
    const router = useRouter()
    return (
        <Layout>
            <p>Place: {router.query.place}</p>
        </Layout>
    )
}
