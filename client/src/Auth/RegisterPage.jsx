import { useState } from 'react'; 
import axios from "axios"
import { useNavigate } from 'react-router-dom'; 
import Layout from '../components/Layout/Layout'
import { Button, Label, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';


function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [answer, setAnswer] = useState("")
  const [address, setAddress] = useState("")

  const navigate = useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault(); 
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, 
      {name , email, password, phone, address,answer});
      if(res.data.success){
        toast.success(res.data.message)
        setTimeout(() => {
          navigate('/login');
        }, 6000);
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Sometging went wrong")
      
    }
  }

  return (
    <Layout title="Register - Ecommerce App" >
      <div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-rose-100 to-teal-100">

        <form onSubmit={handleSubmit} className="flex sm:w-96 2xl:mt-0 2xl:mb-0 mt-20 mb-20 m-3 p-2 flex-col gap-4 shadow-md shadow-black">
          <h1 className=' bg-black text-white text-2xl p-3 text-center xl:text-2xl border rounded-md'>Customer Registration</h1>
          <div>
            <div className=" block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" value={name} type="text" onChange={(e) => { setName(e.target.value) }} required />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="email1" value="email" />
            </div>
            <TextInput id="email1" value={email} type="email" placeholder="example@gmail.com" onChange={(e) => { setEmail(e.target.value) }} required />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} required />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="phone" value="Phone Number" />
            </div>
            <TextInput id="phone" value={phone} type="tel" onChange={(e) => { setPhone(e.target.value) }} required />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="address" value="Address" />
            </div>
            <TextInput id="address" value={address} type="text" onChange={(e) => { setAddress(e.target.value) }} required />
          </div>
          <div>
            <div className=" block">
              <Label htmlFor="answer" value="What is your favouirate sport ?" />
            </div>
            <TextInput id="answer" value={answer} type="text" onChange={(e) => { setAnswer(e.target.value) }} required />
          </div>

          <Button type="submit">Register</Button>
        </form>
      </div>

    </Layout>

  )
}

export default RegisterPage
