import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer , NotificationManager } from "react-notifications";
import { LC, NC, SC, UC } from './Data/Data';
function App() {

  let [uppercase,setuppercase]=useState(false)
  let [lowercase,setlowercase]=useState(false)
  let [symbols,setsymbols]=useState(false)
  let [numbers,setnumbers]=useState(false)
  let [pwLength,setpwLength]=useState(10)
  let [showPass,setshowPass]=useState('')

  let PasswordGen=()=>{
    let charSet=""
    if(uppercase||lowercase||symbols||numbers){

      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(symbols) charSet+=SC;
      if(numbers) charSet+=NC;

      // console.log(charSet)
      let passwordFinal = ''

      for(let i=0;i<pwLength;i++){
        passwordFinal+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      // console.log(passwordFinal)
      setshowPass(passwordFinal)
    }

    else{
      NotificationManager.warning("Select at least one datatype")
    }
  }

  let copy=()=>{
    navigator.clipboard.writeText(showPass)
  }
  return (
    <>
    <div className="pw-box">
      <h1 className='title'>Password Generator</h1>

      <div className="pw">
        <input type="text" readOnly value={showPass} />
        <button onClick={copy}>Copy</button>
      </div>

      <div className="pw-len">
        <label >Password Length</label>
        <input type="number" max={20} min={5} value={pwLength} onChange={(event)=>setpwLength(event.target.value)}/>
      </div>
      
      <div className="pw-len">
        <label >Include Uppercase</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)}/>
      </div>
      
      <div className="pw-len">
        <label >Include Lowercase</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setlowercase(!lowercase)}/>
      </div>
      <div className="pw-len">
        <label >Include Symbols</label>
        <input type="checkbox" checked={symbols} onChange={()=>setsymbols(!symbols)}/>
      </div>
      <div className="pw-len">
        <label >Include Numbers</label>
        <input type="checkbox" checked={numbers} onChange={()=>setnumbers(!numbers)}/>
      </div>

      <button className='genpw' onClick={PasswordGen}>Generate Password</button>
      <NotificationContainer />

    </div>

    <div className="foot">
      &copy;predator
    </div>

    </>
  );
}

export default App;
