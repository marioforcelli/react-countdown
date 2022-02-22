
import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card'
import {ReactComponent as Hills } from './images/pattern-hills.svg'
import {ReactComponent as FbIcon} from './images/icon-facebook.svg'
import {ReactComponent as InstaIcon} from './images/icon-instagram.svg'
import {ReactComponent as PintIcon} from './images/icon-pinterest.svg'


function App() {

  const time = new Date()
  const initialDate = (new Date(time.getTime() + (Math.round((Math.random() * 1000000000)))).getTime()) - 1000

  
  // let [countDownTime, setCountDownTime] = useState(new Date(time.getTime() + (Math.round((Math.random() * 1000000000)))))
  let [timer, setTimer] = useState({
    days: 0,
    hour: 0,
    minutes: 0,
    seconds: 0
  }) 
  
  

  function startTimer(){
    
   
    const now = new Date().getTime()
   
  
    let diff = (initialDate - now) - 1000
    let d = Math.floor((((diff / 1000) / 60) /60) / 24)
    let h = Math.floor(((((diff - Math.floor(((((d * 1000) * 60) * 60) *24)) )/1000)/ 60)/ 60))
    let m  = Math.floor(((((diff - Math.floor(((((d * 1000) * 60) * 60) *24)) ) /1000)/ 60) % 60))
    let s = Math.floor(((((diff - Math.floor((m * 1000) * 60) )) )/1000) % 60)
    console.log(diff)

// 278521387
   
    setTimer(() =>({ days: d, hour: h, minutes: m, seconds: s
    }))
   
  }

  useEffect(() =>{
    
    setInterval(()=>{
      startTimer()

    }, 1000)
  },[])


  
  return (
    <div className='App'>
      <div className='launching-text'>WE'RE LAUNCHING SOON</div>
      <div className= 'cards'>{Object.keys(timer).map((i, index) =>{
        return (<Card key={index} type={i}>{timer[i]}</Card>)
      })}</div>
      <footer><Hills/> 
      <div className='socials'>
        <FbIcon/>
        <InstaIcon/>
        <PintIcon/>
        </div>
        </footer>
    </div>
  )

}

export default App