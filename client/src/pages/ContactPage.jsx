
import Layout from '../components/Layout/Layout'
import { TfiEmail } from "react-icons/tfi";
import { IoMdCall } from "react-icons/io";
import { MdHeadsetMic } from "react-icons/md";
import ContactImage from "../../src/assets/ContactImage.jpg"

function ContactPage() {
  return (
    <Layout title="Contact us - Ecomerce App">
        <div className=' flex flex-col-reverse p-4 justify-around bg-gradient-to-r from-rose-100 to-teal-100 h-full md:p-6 lg:p-12 gap-y-4 xl:flex-row xl:items-center'>          
          <section className='flex flex-col gap-y-3 md:p-6'>
            <h1 className=' bg-black text-white text-2xl p-3 text-center xl:text-4xl'>CONTACT US</h1>
            <p>any query and info about product feel free to call us anytime . </p>
            <p>We are 24 x 7 avaliable</p>
            <p className='flex flex-row gap-x-3 items-center xl:text-xl'><TfiEmail/> <h1>: www.help@ecommerceapp.com</h1></p>
            <p className='flex flex-row gap-x-3 items-center xl:text-xl'> <IoMdCall /> <h1> : 012-3456789</h1></p>
            <p className='flex flex-row gap-x-3 items-center xl:text-xl'> <MdHeadsetMic /> <h1> : 1800-0000-0000(tollfree) </h1></p>
          </section>
          <section className='flex sm:justify-center'>
            <img src={ContactImage} alt="not availabe" className='h-72 shadow-md shadow-gray-900 border rounded-md xl:h-96'/>
          </section>
        </div>
    </Layout>
  )
}

export default ContactPage
