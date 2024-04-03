
import Layout from '../components/Layout/Layout'
import PrivacyImage from '../../src/assets/privacy-policy.jpg'

function PolicyPage() {
  return (
    <Layout title="Privacy Policy - Related to Terms and Conditions">
      <div className=' flex flex-col-reverse p-4 justify-around bg-gradient-to-r from-rose-100 to-teal-100 h-full md:p-6 lg:p-12 gap-y-4 xl:flex-row xl:items-center xl:gap-x-6 '>
        <section className='flex flex-col gap-y-3 md:p-6 xl:w-[50rem]'>
          <h1 className=' bg-black text-white text-2xl p-3 text-center xl:text-4xl'>PRIVACY POLICY</h1>
          <p>Welcome to Ecommerce App. This Privacy Policy outlines how we collect, use, and protect your personal information.
          </p>          
          <p>We collect personal information you provide, such as name, address, and payment details, to process orders and provide services.</p>
          <p>We use collected information to fulfill orders, provide customer support, and send promotional communications.</p>
          <p>We may share personal information with service providers to process orders and marketing partners for promotional purposes.</p>
          <p>We implement security measures to protect personal information from unauthorized access or disclosure.</p>
          <p>You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.We use cookies to analyze website traffic and improve user experience. You can manage cookie preferences in your browser settings.We may update this policy periodically. The effective date will be indicated at the top of the page.</p>

        </section>
        <section className='flex sm:justify-center'>
          <img src={PrivacyImage} alt="not availabe" className='h-72 shadow-md shadow-gray-900 border rounded-md xl:h-96' />
        </section>
      </div>
    </Layout>
  )
}

export default PolicyPage
