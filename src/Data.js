import "./App.css"
import React, { useState } from 'react';
import View from "./View";
import toast from 'react-hot-toast';
// import Add from "./Add";

const Data = (props) => {
  const [listup , setlistup] = useState(JSON.parse(localStorage.getItem("list")))
  const data = JSON.parse( localStorage.getItem(props.list1));

 // let i = localStorage.getItem("i");
  const delect = (event) => {
    const id = event.currentTarget.id;
    // console.log(id);
    const list = listup.filter(item => item !== listup[id])
    // console.log(list)
    // localStorage.removeItem(listup[id]);
    localStorage.setItem("list",JSON.stringify(list));
    // setlistup(list);
    localStorage.setItem("no","sai");
    toast.error("Work deleted!");
    window.location.reload(false);
  } 
  return (
   <>     
          <div className='box'>
           <span className='txt'>📗Subject of your work : {data.input}</span>
           <span className='txt'>🔔Your work : {data.work}</span>
           <span className='txt'>📅Due date : {data.date}</span>
           <span className='txt'> 📅Date and time on which you want to complete : {data.date1}</span>
           <span className='txt'>⌛Due time : {data.time}</span>
           <div className='checkbox'>
           <input className='cbox' type="checkbox" name="rnot" id="rnot" checked={data.check} />
           <span className='txt'>Notify me on time</span>
           <input className='cbox' type="checkbox" name="rnot" id="rnot" />
           <span className='txt'>Mark completed !</span>
           </div>
           <div className='sbox'>
           <button className="btn" id = {props.i} onClick= {delect} > Delete </button>
           </div>
           </div>

          
   </>
  );
};

export default Data;
