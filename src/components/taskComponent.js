import React, { Component } from 'react'
 class Input extends Component {
     state={input:""}
     onChange=(e)=>{
         this.setState({input:e.target.value})
     }
     task=()=>{
         
       
        this.props.handleTasks(this.props.task,this.state.input,this.props.model)
      
     }
    render() {
        return (
            <section className="">
                <div  className="container-fluid mx-auto justify-content-center py-2">
                {/* <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12'> */}
                
                    <textarea className="form-control text-end menu-text bg-dark" rows="5" maxLength="500" style={{resize:'none'}} 
                    onChange={(e)=>this.onChange(e)} value={this.state.input}></textarea>
                {/* </div> */}
                <button className="btn btn-dark col-xxl-1 col-xl-1 col-lg-2 col-md-3 col-sm-3 col-5 my-2 menu-text bg-dark" onClick={this.task}>Run</button>
                {/* <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                    <textarea className="form-control col-4"></textarea>
                </div>   */}
                <div></div>
                </div>
            </section>
        )
    }
}
export default Input
