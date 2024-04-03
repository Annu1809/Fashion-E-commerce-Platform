
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <Layout title="Go back - Page Not Found">
        <div className=' flex flex-col justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100 h-full gap-y-5'>
          <h1 className=' text-6xl font-Roboto font-bold'>404</h1>
          <p className=' text-3xl font-sans text-center'>OOPS ! Page Not Found</p>
          <button className=' border border-gray-800 p-3'>
            <Link to={'/'}>Go Back</Link> </button>
        </div>
    </Layout>
  )
}

export default PageNotFound
