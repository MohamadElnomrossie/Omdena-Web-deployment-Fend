import React from "react";
import Input from "./taskComponent";
import Table from "./table"
export default function Morph(props) {
  return (
    <div className="container">
      <h1 className="text-start my-3">{props.name}</h1>
      <Input task={"morph"} handleTasks={props.handleTasks} />
      <Table fLabel={"Word"} sLabel={"Class"} output={props.output}/>
    </div>
  );
}
