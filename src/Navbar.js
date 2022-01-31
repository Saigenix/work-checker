import './App.css';
import { useState } from 'react';
import Add from './Add';
import Data from './Data';


function Navbar() {
  let [istrue , Setisure] = useState(false);
 


  return (
    <>
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
      <button className="btn" onClick={()=> Setisure(false)}  >add </button>
      <button className="btn" onClick={()=> Setisure(true)}>view </button>
      </div>
   
    {istrue === false ? <Add/> : <Data/>}
  </>
  );}

export default Navbar;
