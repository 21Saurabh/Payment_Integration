import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {

    const navigate = useNavigate();
    useEffect(() => {
     const res=   fetch('/api/logout', {
                method:"GET",
                headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
                },
                credentials:"include"
              }).then(()=>{
                navigate('/login')
                if(res.status!==200){
                    const error = new Error(res.error);
                    throw error;
                }
        }).catch((err)=>{
                console.log(err+" Logout 21")
        })
    }, []);

  return (
    <div>Logout</div>
  )
}

export default Logout