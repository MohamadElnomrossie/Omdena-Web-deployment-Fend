import React from "react";
import Input from "./taskComponent";

export default function Tokenization(props) {
  let text=""
  Object.values(props.output).map((entry)=>text+=" , "+entry+" , ")
  return (
    <div className="container">
      <h1 className="text-start my-2">{props.name}</h1>
      <Input task={"tok"} handleTasks={props.handleTasks} />
      <p className='form-control text-end bg-dark menu-text'>{text}</p>
    </div>
  );
}
