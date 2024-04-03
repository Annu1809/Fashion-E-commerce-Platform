import { Spinner } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Loading({ path = "login" }) {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()
    
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((preValue)=>--preValue)
        },1000)
        count===0 && navigate(`/${path}`,{
          state: location.pathname,
        })
    
        return ()=>clearInterval(interval)
    },[count, navigate,location, path])
  return (
    <>
      <div className="text-center border border-red-700 h-screen flex items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 flex-col gap-y-4">
        <h1>Redirecting to you in {count} second</h1>
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    </>
  )
}

Loading.propTypes = {
  path: PropTypes.string.isRequired, 
};

export default Loading
