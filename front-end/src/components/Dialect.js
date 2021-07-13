import React from "react";
import Input from "./taskComponent";
import Table from "./table"
export default function Dialect(props) {
  return (
    <div className="container">
      <h1 className="text-start my-2">{props.name}</h1>
      <Input task={"dialect"} handleTasks={props.handleTasks} />
      <Table fLabel={"Dialect"} sLabel={"Label"} output={props.output}/>
    </div>
  );
}
