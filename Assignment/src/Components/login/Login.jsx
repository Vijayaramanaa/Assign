import React,{useState} from 'react'
import Group from "../../assets/Group3.png";
import "./login.scss"
import {  useNavigate } from 'react-router-dom';

function Login() {
  const [data,setData] = useState({
    Email : "",
    Password : "",
  })
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate("/home")
    
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className='frm'>
      <div className='container'>
      <div>
        <img src={Group}/>
      </div>
      <div>
        <h3>#We are Electric</h3>
      </div>
      <div className='inpt'>
        <input type='text' placeholder='E-mail' name='Email' required value={data.Email} onChange={(e)=>{setData({...data,Email : e.target.value})}} />
        <input type='password' placeholder='Password' name='Email' required value={data.Password} onChange={(e)=>{setData({...data,Password: e.target.value})}}/>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
      <p>Forgot Password ?</p>
      </div>
    </form>
  )
}

export default Login