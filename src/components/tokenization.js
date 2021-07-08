import React from "react";
import Input from "./taskComponent";
import Table from "./table"
export default function Tokenization(props) {
  return (
    <div className="container">
      <h1 className="text-start my-2">{props.name}</h1>
      <Input task={"tok"} handleTasks={props.handleTasks} />
      <Table fLabel={"Word"} sLabel={"Token"} output={props.output}/>
    </div>
  );
}
