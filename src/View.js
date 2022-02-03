import React, { useState } from 'react';
import Data from './Data';


const View = (props) => {
  const [list, setlist] = useState( JSON.parse(localStorage.getItem("list")));
  console.log("view");
  
  
  return(
      <>
       { localStorage.getItem("sai1") === null || list===[] ?( <div className="box">
        <br />
       <span className="txt"> Nothing, to show here!</span>
       <br />
      </div>) : 
      list.map((item, index) => <Data list1={item} i={index}/>)} 
      
      </>
    




  ) ;
};

export default View;
