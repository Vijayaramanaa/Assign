import React,{useState} from 'react'
import "./home.scss"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Profile from '../profile/Profile'

function Home() {
  const [active,setActive] = useState("btn1")
  const list = [{
    day : "Monday",
    percent : 40 
  },{
    day : "Tuesday",
    percent : 92
  },{
    day : "Wednesday",
    percent : 122
  },{
    day : "Thursday" ,
    percent: 93
  },{
    day : "Friday" ,
    percent : 89
  },{
    day : "Saturday" ,
    percent : 98
  }]
  return (
    <div>
   <Header/>
   {active == "btn1" ?
    <div className='contain'>
      <div className='dashboard'>
        <h1>Employee Productivity Dashboard</h1>
      </div>
      <div className='maparea'>{list.map((item,index)=>{return(
        <div key={index}>
          <div className='clm'>
          <h3>Productivity on {item.day}</h3>
          <h4>{item.percent}%</h4>
          </div>
          <div className='rangebg'>
          <div className='range' style={{width:`${item.percent/12}em`}}>
          </div>
          </div>
        </div>
        
      )})
        }
      </div>
    </div>:<Profile/>}
    <Footer active={active}
    setActive={setActive}
    />
    </div>
  )
}

export default Home