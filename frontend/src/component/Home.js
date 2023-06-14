import React,{useState,useEffect} from 'react'

 const Home=()=>{
  // const [userdata, setUserdata] = useState({});
  // const getuserdata=async (req,res)=>{
  //   try {
  //     const res = await fetch('/api/getuser',{
  //       method:"GET",
  //       headers:{
  //         "Content-Type":"application/json"
  //       }
  //     })
  //     const data = await res.json();          
  //     setUserdata(data);
  //     if(!res.status===201){
  //       alert('something went wrong')
  //       console.log("error occured at contact.jsx at 22")
  //     }
  //   } catch (error) {
  //     navigate('/login')
  //   }
  // }
  //   useEffect(() => {
  //     getuserdata();
  //   });


  return (
    <>
      <div className='mt-5 pt-5 home-page d-flex justify-content-center'>
          <div className='home-div'>
            <p className='pt-5 d-flex justify-content-center'>
            <b>Welcome</b>
              
            </p>
            <h2 className='d-flex justify-content-center'>
              {/* {userdata!==null?userdata.name:null} */}
              </h2>
            <h2>This is an authentication software</h2>
          </div>
      </div>
    </>
    
  )
}
export default Home