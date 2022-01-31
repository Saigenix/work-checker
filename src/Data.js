import "./App.css"
import React from 'react';
import Add from "./Add";

const Data = (props) => {
  console.log(Add.data);
  return (
   <>
           <div className='box'>
           <span className='txt'>📗Subject of your work : {Add.input}</span>
           <span className='txt'>🔔your work :</span>
           <span className='txt'>📅Due date :</span>
           <span className='txt'> 📅date and time on which you want to complete :</span>
           <div className='checkbox'>
           <input className='cbox' type="checkbox" name="rnot" id="rnot" />
           <span className='txt'>Notify me on time</span>
           </div>
           <div className='sbox'>
           <button className="btn"> Delect </button>
           </div>
           </div>
   </>
  );
};

export default Data;
