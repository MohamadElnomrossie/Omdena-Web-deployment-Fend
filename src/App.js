import './App.css';
import React, {Component} from 'react';
import Input from "./components/taskComponent"
import Navbar from "./components/navbar"
import {Redirect, Route,Switch } from "react-router-dom";
import Sentiment from './components/sentiment'
import NER from "./components/ner"
import POS from "./components/pos"
import Dialect from "./components/Dialect"
import LEM from "./components/lemma"
import Tokenization from "./components/tokenization"
import Similar from "./components/similarWords"
class App extends Component {
  state={sentiment:{'positive':0,'mixed':0,'negative':0},
  NER:{"man":"nadasd","dsds":"OOS"},
POS:{"man":"nadasd","dsds":"OOS"},
Dialect:{'BINARY':1, 'COUNTRY':'Egypt', 'REGION':'Egypt'},
LEM:{"dsdasd":"dsadsd"},
token:{"word":"token"},
// ==========================================
Similar:{}}
// ==========================================
  handleTasks=(name,input,model=undefined)=>{
    const sentimentModels=['alkholi','lstm','arabert']
    const similarityModels=['aravec','word2vec']
    if (name==='sent' && sentimentModels.includes(model)){
      this.get_sentiment(input,model)
    }
    else if (name==='ner'){
      this.get_ner(input)
    }
    else if (name==='pos'){
      this.pos(input)
    }
    else if(name==='dialect'){
      this.dialect(input)
    }
    else if(name==='lem'){
      this.lem(input)
    }
    else if(name==='tok'){
      this.tokenize(input)
    }
    else if(name==='sim'&& similarityModels.includes(model)){
      this.sim(input,model)
    }
    else{
      return
    }
  }
  sim=async(text,model)=>{
    try{
      this.setState({Similar:{}})
      const url=process.env.REACT_APP_URL+'/'+model+'/similar'
       //  const output=await fetch(url,this.requestOptions(text))
      //  this.setState({Similar:output.result})
      
    }
    catch(e){
      console.log(e)
    }
  }
 
  lem=async(text)=>{
    const url=process.env.REACT_APP_URL+"/lemma"
    this.setState({LEM:{}})
    try{
      //  const output=await fetch(url,this.requestOptions(text))
      //  this.setState({LEM:output.result})
    }
    catch(e){
      console.log(e)
    }
  }
  dialect=async(text)=>{
    const url=process.env.REACT_APP_URL+"/dialect"
    try{
      this.setState({Dialect:{}})
      //  const output=await fetch(url,this.requestOptions(text))
      //  this.setState({Dialect:output.result})
    }
    catch(e){
      console.log(e)
    }
  }

  pos=async(text)=>{
    const url=process.env.REACT_APP_URL+"/pos"
    try{
      this.setState({POS:{}})
      //  const output=await fetch(url,this.requestOptions(text))
      //  this.setState({POS:output.result})
    }
    catch(e){
      console.log(e)
    }
  }
  tokenize=async(text)=>{
    this.setState({token:{}})
    const url=process.env.REACT_APP_URL+'/tokenize'
    try{
      const output=await fetch(url,this.requestOptions(text))
      this.setState({token:output.result})
    }
    catch(e){
      console.log(e)
    }
  }
   get_sentiment=async(text,model)=>{
     const url=process.env.REACT_APP_URL+'/sentiment/'+model
     try{
       this.setState({Sentiment:{}})
       //  const output=await fetch(url,this.requestOptions(text))
      //  this.setState({Sentiment:output.result})
     }
     catch(e){
       console.log(e)
     }
     //  const output=await fetch()
  }
  get_ner=async(text)=>{
    try{
      this.setState({NER:{}})
      const url=process.env.REACT_APP_URL+'/ner'
       //  const output=await fetch(url,this.requestOptions(text))
      //  this.setState({NER:output.result})

    }
   catch(e){
     console.log(e)
   }
  }
requestOptions=(text)=>{return{
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin',
    headers: {
      //'Content-Type': 'application/json'
       'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({text}) // body data type must match "Content-Type" header
  }
}

  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
        <Route  path="/lemmatization" render={()=>(<LEM 
        name={'Lemmatization'}
         task={'lem'}
         output={this.state.LEM}
         handleTasks={this.handleTasks}/>)}/>
         {/* ======================================= */}
        <Route  path="/sentiment"  render={()=>(<Sentiment
         name={'Sentiment Analysis'} 
         output={this.state.sentiment}
         handleTasks={this.handleTasks}/>)}/>
         {/* ======================================= */}
        <Route  path="/ner"  render={()=>(<NER
         name={'Named Entity Recognition'}
         task={'ner'}
         handleTasks={this.handleTasks}
         output={this.state.NER}/>)}/>
         {/* ==================================== */}
         <Route  path="/tokenization"  render={()=>(<Tokenization 
        name={'Tokenization'} 
        task={'tok'}
        output={this.state.token}
        handleTasks={this.handleTasks}/>)}/>
         {/* ==================================== */}
        <Route  path="/pos"  render={()=>(<POS 
        name={'Parts Of Speech Tagging'} 
        task={'pos'}
        output={this.state.POS}
        handleTasks={this.handleTasks}/>)}/>
         {/* ==================================== */}
         <Route  path="/dialect"  render={()=>(<Dialect 
        name={'Dialect Identification'} 
        task={'dialect'}
        output={this.state.Dialect}
        handleTasks={this.handleTasks}/>)}/>
        {/* ====================================== */}
        <Route  path="/similar"  render={()=>(<Similar
         name={'Similar Words'}
          task={'sim'}
          output={this.state.Similar}
        handleTasks={this.handleTasks}/>)}/>
        <Route path="/" exact render={()=>(<Input name={'Lemmatization'} task={'lem'}/>)}/>
        <Redirect to="/lemmatization"/>
        </Switch>
      </div>
    );
  }
  
}

export default App;