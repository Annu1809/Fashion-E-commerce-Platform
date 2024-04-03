
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' bg-slate-800 p-3 flex justify-center flex-col items-center text-white'>
      <h1 className=' text-xl'>All Rights Reserved &copy;</h1>
      <p>
        <Link to ='/about' className=' mx-3 ' >About</Link>|
        <Link to ='/contact' className=' mx-3'>Contact</Link>|
        <Link to ='/policy' className=' mx-3' >Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer
