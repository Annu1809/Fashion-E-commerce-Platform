import {useState, useEffect} from "react"
// import { AuthProvider } from "../../Context/auth"
import { Outlet } from "react-router-dom"
import axios from "axios"
// import Loading from "../Spinner/Loading.jsx"


export default function AdminRoute(){
    const [ok, setOk ] = useState(false)
    const [auth] = useState()

    useEffect(()=>{
        const authCheck = async() =>{
            const res = await axios.get('/api/v1/auth/admin-auth')
            if(res.data.ok){
                setOk(true)
            }
            else{
                setOk(false)
            }
        }
        if(auth ?.token) authCheck()
    },[auth ?.token])

    console.log(ok);

    if(ok){
        return <Outlet/>
    }

}