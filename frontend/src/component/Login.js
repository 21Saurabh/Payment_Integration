import React,{useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'

const Login = () => {
  const [data,setData] = useState({
    email:"",password:""
  });
  const navigate = useNavigate();
  const collectdata = (e)=>{
    let name = e.target.name;
    let value = e.target.value
    setData({...data,[name]:value})
  }
  const handlelogin=async (e)=>{
    e.preventDefault();
    const {email,password} = data;
    const res = await fetch('/api/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email,password
      })
    })

    const message = await res.json();
    if(res.status===400 || !message){
      window.alert('something went wrong')
      console.log("error occured at login.jsx at 31")
    }
    else{
      window.alert("Logged in successfully")
      console.log("successfull registration")

      navigate("/pay");
    }

  }
  return (
    <>
      <div className="col-6 offset-lg-3 mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h1 className="mx-5">Login Form</h1>
      <form method='POST'>
        <div className="d-flex flex-column ms-5 col-8">
          <div className="mt-2 p-2">
            <input
            onChange={collectdata}
            value={data.email}
            name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          
          <div className="mt-2 p-2">
            <input
            onChange={collectdata}
            value={data.password}
            name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          
          <div className="mt-2 p-2">
          <button type="submit" onClick={handlelogin} className="btn btn-primary">Login</button>
          <NavLink className="btn btn-warning ms-3" to="/registration" role="button">Not register yet?</NavLink>
          </div>
        </div>
      </form>
      </div>      
      </>
  )
}

export default Login