import React from 'react';
import "./profile.scss";
import { IoSearch } from "react-icons/io5";

function Profile() {
    const name = [{
        id : 1,
        Name : "Arjun",
        Dob : "16-11-2000",
        Role : "Software Engineer"
    },{
        id : 2,
        Name : "Mahesh",
        Dob : "15-01-2000",
        Role : "Web Developer"
    },{
        id : 3,
        Name : "Vijayaramanaa",
        Dob : "20-07-2000",
        Role : "FullStack Dev"
    },{
        id : 4,
        Name : "Ragav",
        Dob : "20-11-2000",
        Role : "Software Engineer"
    },]
  return (
    <div className='containare'>
        <div className='search'>
            <input placeholder='Search with name' />
            <IoSearch className='imgs'/>
        </div>
        <div className='lst'>
            {name.map((data,index)=>{
                return(
                    <div className='list' key={index}>
                        <div><h1>EMP ID :<span style={{color:"#FFFFFF8C",marginLeft:"15px"}}>{data.id}</span> </h1></div>
                        <div><h1>Name : <span style={{color:"#FFFFFF8C",marginLeft:"15px"}}>{data.Name}</span></h1></div>
                        <div><h1>DOB : <span style={{color:"#eb9834",marginLeft:"15px"}}>{data.Dob}</span></h1></div>
                        <div ><h1>Role : <span style={{color:"#36A546",marginLeft:"1px"}}>{data.Role}</span> </h1></div>
                        <div className='spn'><span style={{color:"#FFFFFF8C",marginLeft:"15px"}}>{data.id}</span> </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Profile