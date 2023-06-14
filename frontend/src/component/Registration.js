import React,{useState} from "react";
import bg from '../assets/bg_register.jpg'
import {NavLink,useNavigate} from 'react-router-dom'

const Registration = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",password:"",cpassword:""
  });

const inputhandle=(e)=>{
      let naam = e.target.name;
      let value=e.target.value;
      setUser({...user,[naam]:value})
}
// sending data to server
const PostData= async (e)=>{
    e.preventDefault();
    const {name,email,password,cpassword} = user;
    const res = await fetch("/api/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        // field name is same as field name in db so not writing like name:name
        name,email,password,cpassword
      })
    })
    const data = await res.json();
    if(res.status ===422 || !data){
      window.alert("Invalid registration")
      console.log("invalid registration")
    }
    else{
      window.alert("registration completed")
      console.log("successfull registration")

      navigate("/login");
    }
    
}
  return (
    <>
    <div className="row w-lg-100">
    <div className="col-lg-5">
          <img src={bg} alt="this is an image" style={{height:"70vh", width:"36vw", position:"absolute"}}/>
      </div>
      <div className="col-6 shadow-lg m-5 p-3 mb-5 bg-body-tertiary rounded">
      <h1 className="mx-5">Sign Form</h1>

      <form method="POST">
        <div className="d-flex flex-column ms-5 col-8">
          <div className="mt-2 p-2">
            <input 
            onChange={inputhandle}
            value={user.firstname}
            name="name"
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mt-2 p-2">
            <input 
            onChange={inputhandle}
            value={user.email}
            name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
        
          <div className="mt-2 p-2">
            <input 
            onChange={inputhandle}
            value={user.password}
            name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="mt-2 p-2">
            <input 
            onChange={inputhandle}
            value={user.cpassword}
            name="cpassword"
              type="password"
              className="form-control"
              placeholder="confirm your Password"
            />
          </div>
          <div className="mt-2 p-2">
          <button type="submit" className="btn btn-primary" onClick={PostData}>Submit </button>
          <NavLink className="btn btn-warning ms-3" to="/login" role="button">Already register</NavLink>
          </div>
        </div>
      </form>
      </div>
    </div>
    </>
      )
};

export default Registration;