import React, {Component} from "react";
import Input from "./taskComponent";
import Table from "./table";
export default class Similar extends Component {
    state={model:'aravec'}
    modelChange=(e)=>{
        this.setState({model:e.target.value});
      };
    render(){

        return (
          <div className="container">
            <h1 className="text-start my-2">{this.props.name}</h1>
            <div className="border-1 col-12 mx-auto container">
            <h6 className="text-start form-label my-3" htmlFor='select' >Model Selection</h6>
            <select className="form-control bg-dark menu-text" defaultValue={this.state.model} onChange={(e)=>this.modelChange(e)}>
              <option value="aravec">Aravec</option>
              <option value="word2vec">Word2Vec</option>
            </select>
            </div>
            <Input task={"sim"} handleTasks={this.props.handleTasks} model={this.state.model}/>
              {Object.entries(this.props.output).map((entry)=>{
                  const scores={}
                  for(var x=0;x<entry[1].length;x++){
                  scores[entry[1][x][0]]=entry[1][x][1] 
              }
              
           return(
      
              <div key={entry}>
                  <h5>{entry[0]}</h5>
                  <Table fLabel={"Word"} sLabel={"Score"} output={scores}/>
                  </div>
           )
      })}
          </div>
        );
    }
}
