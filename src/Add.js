import React from 'react';
import { useState , useEffect } from 'react';
import toast from 'react-hot-toast';
import './App.css';

function Add() {
    const [date1 , setdate1] = useState("");
    const [inputsub, setInputsub] = useState('');
    const [inputwork, setInputwork] = useState('');
    const [inputdate, setInputdate] = useState(date1);
    const [inputdate2, setInputdate2] = useState(date1);
    const [inputtime, setInputtime] = useState("15:00");
    const [inputcheck, setInputcheck] = useState(false);
    // const [list , setlist] = useState(["s", "a", "i", "0"]);
   // const [val , setval] = useState("sai0");
    useEffect(() => {
        setdate1(today());
       
        }, [])

    const data = {
        input : inputsub,
        work : inputwork,
        date : inputdate,
        date1 : inputdate2,
        time : inputtime,
        check : inputcheck
    }
    console.log(data);
    
    
    const today = () => {
    const d = new Date()
    let n = (d.getMonth()+1).toString() ;
    let nn = (d.getDate()).toString() ;
    if(n.length < 2)
        n= "0"+n;
    if(nn.length < 2)
        nn= "0"+ nn;
    console.log(3);
    return(((d.getFullYear()).toString()) + "-" + n + "-" + nn) ;
    }
    const handleOnChange = () => {
        setInputcheck(!inputcheck);
      };
    const reset = () => {
        setInputsub("");
        setInputwork("");
        inputcheck?setInputcheck(!inputcheck):setInputcheck(inputcheck);
        toast.success("data Reset successfully!");

    }
    
    let i;
    localStorage.getItem("i")===null? i="0": i= parseInt(localStorage.getItem("i"));
    let list;
    localStorage.getItem("list")===null? list=[]: list= JSON.parse(localStorage.getItem("list"));
    const save = () => {
        if (inputsub === "" || inputwork === "") {
            toast.error("Please fill all the fields");
            return;
        }
        i++;
        let val = "sai"+i ;
        localStorage.setItem((val) , JSON.stringify(data));
        localStorage.setItem("i", i);
        list.push(val);
        localStorage.setItem("list", JSON.stringify(list));
        toast.success("data saved successfully!");
        reset();
        
}

    return (
        <>
        <div className='box'>
           <span className='txt'>📗Subject of your work :</span>
           <input  className="inp" type="text" name="sub" id="sub" placeholder="Enter here" value={inputsub} onInput={e => setInputsub(e.target.value)} />
           <span className='txt'>🔔Your work :</span>
           <textarea  className="inp" style={{height: "120px"}} type="text" name="sub" id="work" placeholder='Enter here' value={inputwork} onInput={e => setInputwork(e.target.value)} />
           <span className='txt'>📅Due date :</span>
           <input  className="inp" type="date" name="sub" id="duedate" defaultValue ={date1} onInput={e => setInputdate(e.target.value)} />
           <span className='txt'> 📅Date and time on which you want to complete :</span>
           <input  className="inp" type="date" name="sub" id="comdate" defaultValue ={date1} onInput={e => setInputdate2(e.target.value)} />
           <br />
           <input className='inp' type="time" name="time" id="time" defaultValue="12:00" onInput={e => setInputtime(e.target.value)} />
           <br />
           <div className='checkbox'>
           <input className='cbox' type="checkbox" name="rnot" id="rnot" checked={inputcheck} onChange={handleOnChange}/>
           <span className='txt'>Notify me on time</span>
           </div>
           <div className='sbox'>
           <button className="btn" onClick={reset}>Reset </button>
           <button className="btn" onClick={save} >Save  </button>
           </div>
           </div>
         </>
        
    )
}

export default Add
