import React from "react";
import "./contact.css";

 
function Contact(props){
  return(
    <div className="Contact">
      <img src={props.avatar} className='avatar' alt ='Nem Pic' />
      <div>
        <h4 className='name'> {props.name} </h4>
        <div className='status'>
          <div className={props.isOnline?'status-online':'status-offline'}> </div>
            <p className= 'status-text'> {props.isOnline? 'Online': 'Offline'} </p>
          </div>
        </div>
      </div>
  );  
}

export default Contact;

