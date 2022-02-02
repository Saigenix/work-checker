import "./App.css"
import React from 'react';
// import Add from "./Add";

const Data = (props) => {
 
  return (
   <>
          <div className='box'>
           <span className='txt'>📗Subject of your work : {props.data.input}</span>
           <span className='txt'>🔔your work : {props.data.work}</span>
           <span className='txt'>📅Due date : {props.data.date}</span>
           <span className='txt'> 📅date and time on which you want to complete : {props.data.date1}</span>
           <span className='txt'>⌛Due time : {props.data.time}</span>
           <div className='checkbox'>
           <input className='cbox' type="checkbox" name="rnot" id="rnot" checked={props.data.check} />
           <span className='txt'>Notify me on time</span>
           </div>
           <div className='sbox'>
           <button className="btn" id = {props.i} > Delect </button>
           </div>
           </div>

          
   </>
  );
};

export default Data;
