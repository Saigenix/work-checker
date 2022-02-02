import React from 'react';
import Data from './Data';


const View = (props) => {
 
  return(
      <>
      { localStorage.getItem("sai1") === null ?( <div className="box">
        <br />
       <span className="txt"> Nothing, to show here!</span>
       <br />
      </div>) : <Data  data = {props.data} i={props.i}/>}
      
      </>
    




  ) ;
};

export default View;
