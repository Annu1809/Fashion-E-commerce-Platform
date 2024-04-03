// import React from 'react'
import Layout from '../components/Layout/Layout'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgotPassword`,
                {
                    email,
                    newPassword,
                    answer,
                });
                if (res && res.data.success) {
                    toast.success(res.data && res.data.message);
            
                    navigate("/login");
                  } else {
                    toast.error(res.data.message);
                  }
                } catch (error) {
                  console.log(error);
                  toast.error("Something went wrong");
                }
              };
    return (
        <Layout title='Forgot-Password E-commerece'>
            <div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-rose-100 to-teal-100">

                <form onSubmit={handleSubmit} className="flex sm:w-96 2xl:mt-0 2xl:mb-0 mt-20 mb-20 m-3 p-2 flex-col gap-4 shadow-md shadow-black">
                    <h1 className=' bg-black text-white text-2xl p-3 text-center xl:text-2xl border rounded-md'>Reset Password</h1>

                    <div>
                        <div className=" block">
                            <Label htmlFor="email1" value="Enter your email" />
                        </div>
                        <TextInput id="email1" value={email} type="email" placeholder="example@gmail.com" onChange={(e) => { setEmail(e.target.value) }} required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="sport1" value="Enter Your favorite Sport Name" />
                        </div>
                        <TextInput id="sport1" value={answer} type="text" onChange={(e) => { setAnswer(e.target.value) }} required />
                    </div>
                    <div>
                        <div className=" block">
                            <Label htmlFor="password" value="Enter Your password" />
                        </div>
                        <TextInput id="password" value={newPassword} type="password" onChange={(e) => { setNewPassword(e.target.value) }} required />
                    </div>
                    <Button type='submit'>Reset</Button>                   

                    
                </form>
            </div>
        </Layout>
    )
}

export default ForgotPassword
