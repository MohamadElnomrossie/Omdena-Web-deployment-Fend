import React from "react";
import Input from "./taskComponent";
import Table from "./table"
export default function LEM(props) {
  return (
    <div className="container">
      <h1 className="text-start my-2">{props.name}</h1>
      <Input task={"lem"} handleTasks={props.handleTasks} />
      <Table fLabel={"Word"} sLabel={"Lemma"} output={props.output}/>
    </div>
  );
}
