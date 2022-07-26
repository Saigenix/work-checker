import './App.css';
import { useEffect, useState } from 'react';
import Add from './Add';
import View from './View';
import OneSignal from 'react-onesignal';
import toast, { Toaster } from 'react-hot-toast';

function Navbar() {
  const [istrue , Setisure] = useState(false);
  const tt = localStorage.getItem("no")
  if (tt === "sai") {
    Setisure(false);
    console.log(tt);
    localStorage.removeItem("no");
  }

  useEffect(() => {
    OneSignal.init({
      appId: "aad111a1-15b1-4185-a9b5-1fc32cf6ae34"
    });
  }, []);


  return (
    <>
    <Toaster />
  <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      Work_pro
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
  <a href="/#" >Login/sign-up</a>
    <a href="/#" >About us</a>
    <a href="/#" >Contact us</a>
    <a href="/#" >Privacy policy</a>
    <a href="/#" >More Tools</a>
  </div>
</div>
    
      <div className='navn'> 
      <button className="btn" onClick={()=> Setisure(false)}>add </button>
      <button className="btn" onClick={()=> Setisure(true)}> view </button>
      </div>
     
     {istrue? <View/>: <Add/> } 
      
           </>
  );}

export default Navbar;
