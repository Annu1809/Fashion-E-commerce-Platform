
import Layout from '../components/Layout/Layout'
import AboutUs from '../../src/assets/aboutUs.jpg'

function AboutPage() {
  return (
   <Layout title={'About us-Ecommerce App'}>
     <div className=' flex flex-col-reverse p-4 justify-around bg-gradient-to-r from-rose-100 to-teal-100 h-full md:p-6 lg:p-12 gap-y-4 xl:flex-row xl:items-center xl:gap-x-5'>          
          <section className='flex flex-col gap-y-3 md:p-6 xl:w-[60rem]'>
          <h1 className=' bg-black text-white text-2xl p-3 text-center xl:text-4xl'>ABOUT US</h1>
            <p className='sm:p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum necessitatibus, expedita nam eveniet qui alias doloremque quos quia quasi culpa in reprehenderit iste aliquid, aliquam distinctio eaque porro, rem iure.
            Error voluptatum architecto obcaecati quia! Nisi exercitationem laboriosam, labore eius quaerat maxime praesentium debitis animi repellendus suscipit neque recusandae asperiores amet aut nobis odit autem illo rem sed quisquam optio!</p>
          </section>
          <section className='flex sm:justify-center'>
            <img src={AboutUs} alt="not availabe" className='h-72 shadow-md shadow-gray-900 border rounded-md xl:h-96'/>
          </section>
        </div>
   </Layout>
  )
}

export default AboutPage
