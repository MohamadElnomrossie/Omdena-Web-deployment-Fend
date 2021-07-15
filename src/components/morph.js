import React from "react";
import Input from "./taskComponent";

import MorphAccordion from "./morphAccordion"
export default function Morph(props) {

  return (
    <div className="container mb-5">
      <h1 className="text-start my-3">{props.name}</h1>
      <Input task={"morph"} handleTasks={props.handleTasks} />
      <h1 className="text-start">Output</h1>
      <MorphAccordion output={props.output}/>
     </div>
  );
}
