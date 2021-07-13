import React,{Component} from "react";
import Input from "./taskComponent";
export default class Sentiment extends Component {
  state={mode:"alkholi"}
  modelChange=(e)=>{
    this.setState({model:e.target.value});
  };
  render(){
    return (
    <div className="container d-flex flex-column px-2">
      <h1 className="text-start my-2">{this.props.name}</h1>
      <div className="border-1 col-12 mx-auto container">
      <h6 className="text-start form-label my-3" htmlFor='select' >Model Selection</h6>
      <select className="form-control" defaultValue={this.state.model} onChange={(e)=>this.modelChange(e)}>
        <option value="alkholi">Al-Kholi</option>
        <option value="arabert">ARaBERT</option>
        <option value="lstm">LSTM</option>
      </select>
      </div>
      <Input  
      task={"sent"}
      handleTasks={this.props.handleTasks} className='col-4'
      model={this.state.model} />
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 mx-auto mb-5 px-4">
        <h6 className="text-start">Negative:</h6>
        <div className="progress">
          <div
            className="progress-bar bg-danger progress-bar-striped "
            role="progressbar"
            style={{ width: this.props.output.negative * 100 + "%" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          {Math.round(this.props.output.negative * 100) + "%"}
        </div>
        <br />
        <br />
        <h6 className="text-start">Mixed:</h6>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: this.props.output.mixed * 100 + "%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100">
            {Math.round(this.props.output.mixed * 100) + "%"}
          </div>
        </div>
        <br />
        <br />
        <h6 className="text-start">Positive:</h6>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: this.props.output.positive * 100 + "%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {Math.round(this.props.output.positive * 100) + "%"}
          </div>
        </div>
      </div>
    </div>
  );
  }
}

