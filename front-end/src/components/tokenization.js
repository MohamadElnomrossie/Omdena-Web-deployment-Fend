import React from "react";
import Input from "./taskComponent";
import Table from "./table"
export default function Tokenization(props) {
  console.log("============================================================")
  console.log(Object.values(props.output))
  let text=""
  Object.values(props.output).map((entry)=>{
    text+=" "+entry+" "
  })
  console.log(text)
  return (
    <div className="container">
      <h1 className="text-start my-2">{props.name}</h1>
      <Input task={"tok"} handleTasks={props.handleTasks} />
      <p className='form-control text-end'>{text}</p>
      

    </div>
  );
}
