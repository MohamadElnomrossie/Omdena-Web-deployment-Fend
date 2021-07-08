import React from "react";
import Input from "./taskComponent";
import Table from "./table"
export default function NER(props) {
  return (
    <div className="container">
      <h1 className="text-start my-2">{props.name}</h1>
      <Input task={"ner"} handleTasks={props.handleTasks} />
      <Table fLabel={"Word"} sLabel={"Class"} output={props.output}/>
    </div>
  );
}
