import React from 'react';
import './App.css';

function Add() {
   
    const today = () => {
    const d = new Date()
    let n = (d.getMonth()+1).toString() ;
    let nn = (d.getDate()).toString() ;
    if(n.length < 2)
        n= "0"+n;
    if(nn.length < 2)
        n= "0"+n;
    console.log(3);
    return ((d.getFullYear()).toString() + "-" + n + "-" + nn) ;
    }
   

    return (
        <>
        <div className='box'>
           <span className='txt'>📗Subject of your work :</span>
           <input  className="inp" type="text" name="sub" id="sub" placeholder="Enter here" />
           <span className='txt'>🔔your work :</span>
           <input  className="inp" type="text" name="sub" id="work" placeholder='Enter here' />
           <span className='txt'>📅Due date :</span>
           <input  className="inp" type="date" name="sub" id="duedate" defaultValue ={today()} />
           <span className='txt'> 📅date and time on which you want to complete :</span>
           <input  className="inp" type="date" name="sub" id="comdate" defaultValue ={today()} />
           <br />
           <input className='inp' type="time" name="time" id="time" defaultValue="12:00" />
           <br />
           <div className='sbox'>
           <button className="btn">Reset </button>
           <button className="btn" >Save  </button>
           </div>
        </div>
         </>
        
    )
}

export default Add
