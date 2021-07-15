import './App.css';
import React, {Component} from 'react';
import Navbar from "./components/navbar"
import {Redirect, Route,Switch } from "react-router-dom";
import Sentiment from './components/sentiment'
import NER from "./components/ner"
import POS from "./components/pos"
import Dialect from "./components/Dialect"
import LEM from "./components/lemma"
import Tokenization from "./components/tokenization"
import Similar from "./components/similarWords"
import Home from "./components/home"
import Morph from "./components/morph"

class App extends Component {
  state={sentiment:{'positive':0,'mixed':0,'negative':0},
  NER:{},
POS:{},
Dialect:{},
LEM:{},
token:[],
// ==========================================
Similar:{},
morph:{'أحمد': {'Tokenization': 'احمد', 'Lemmatization': 'أحمد', 'Gender': 'أحمد', 'POS': 'أحمد', 'Similars': 'أحمد', 'Diactrization': 'أحمد'}, 
'خالد': {'Tokenization': 'خالد', 'Lemmatization': 'خالد', 'Gender': 'خالد', 'POS': 'خالد', 'Similars': 'خالد', 'Diactrization': 'خالد'}, 
'توفيق': {'Tokenization': 'توفيق', 'Lemmatization': 'توفيق', 'Gender': 'توفيق', 'POS': 'توفيق', 'Similars': 'توفيق', 'Diactrization': 'توفيق'}, 
'في': {'Tokenization': 'في', 'Lemmatization': 'في', 'Gender': 'في', 'POS': 'في', 'Similars': 'في', 'Diactrization': 'في'}, 
'رواية': {'Tokenization': 'رواية', 'Lemmatization': 'رواي', 'Gender': 'رواية', 'POS': 'رواية', 'Similars': 'رواية', 'Diactrization': 'رواية'}, 
'«': {'Tokenization': '«', 'Lemmatization': '«', 'Gender': '«', 'POS': '«', 'Similars': '«', 'Diactrization': '«'}, 
'جمهورية': {'Tokenization': 'جمهورية', 'Lemmatization': 'جمهوري', 'Gender': 'جمهورية', 'POS': 'جمهورية', 'Similars': 'جمهورية', 'Diactrization': 'جمهورية'}, 
'كأن': {'Tokenization': 'كان', 'Lemmatization': 'أن', 'Gender': 'كأن', 'POS': 'كأن', 'Similars': 'كأن', 'Diactrization': 'كأن'}, 
'»': {'Tokenization': '»', 'Lemmatization': '»', 'Gender': '»', 'POS': '»', 'Similars': '»', 'Diactrization': '»'}, 
'للروائي': {'Tokenization': 'للر+وايي', 'Lemmatization': 'روائي', 'Gender': 'للروائي', 'POS': 'للروائي', 'Similars': 'للروائي', 'Diactrization': 'للروائي'}, 
'علاء': {'Tokenization': 'علاء', 'Lemmatization': 'علاء', 'Gender': 'علاء', 'POS': 'علاء', 'Similars': 'علاء', 'Diactrization': 'علاء'}, 
'الأسواني': {'Tokenization': 'الاس+واني', 'Lemmatization': 'أسواني', 'Gender': 'الأسواني', 'POS': 'الأسواني', 'Similars': 'الأسواني', 'Diactrization': 'الأسواني'}, 
'،': {'Tokenization': '،', 'Lemmatization': '،', 'Gender': '،', 'POS': '،', 'Similars': '،', 'Diactrization': '،'}, 
'المشروع': {'Tokenization': 'المشروع', 'Lemmatization': 'مشروع', 'Gender': 'المشروع', 'POS': 'المشروع', 'Similars': 'المشروع', 'Diactrization': 'المشروع'}, 
'الذي': {'Tokenization': 'الذي', 'Lemmatization': 'الذي', 'Gender': 'الذي', 'POS': 'الذي', 'Similars': 'الذي', 'Diactrization': 'الذي'}, 
'ظل': {'Tokenization': 'ظل', 'Lemmatization': 'ظل', 'Gender': 'ظل', 'POS': 'ظل', 'Similars': 'ظل', 'Diactrization': 'ظل'}, 
'يتحدث': {'Tokenization': 'يتحدث', 'Lemmatization': 'يتحدث', 'Gender': 'يتحدث', 'POS': 'يتحدث', 'Similars': 'يتحدث', 'Diactrization': 'يتحدث'}, 
'ولم': {'Tokenization': 'ولم', 'Lemmatization': 'لم', 'Gender': 'ولم', 'POS': 'ولم', 'Similars': 'ولم', 'Diactrization': 'ولم'}, 
'يفارق': {'Tokenization': 'يف+ارق', 'Lemmatization': 'يفارق', 'Gender': 'يفارق', 'POS': 'يفارق', 'Similars': 'يفارق', 'Diactrization': 'يفارق'},
 'ذهنه': {'Tokenization': 'ذهن+ه', 'Lemmatization': 'ذهن', 'Gender': 'ذهنه', 'POS': 'ذهنه', 'Similars': 'ذهنه', 'Diactrization': 'ذهنه'}}}
// ==========================================

  handleTasks=(name,input,model='alkholi')=>{
    const sentimentModels=['alkholi','lstm','arabert']
    const similarityModels=['aravec','word2vec']
    if (name==='sent' & sentimentModels.includes(model) ){
     
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
    else if(name==='morph'){
      this.get_morph(input)
    }
    else{
      return
    }
  }
  sim=async(text,model)=>{
    try{
      this.setState({Similar:{}})
     
      const url=process.env.REACT_APP_URL+'/'+model+'/similar'
      const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      var data = await output.json();
      this.setState({Similar:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
 
  lem=async(text)=>{
    const url=process.env.REACT_APP_URL+"/lemma"
    this.setState({LEM:{}})
    try{
       const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
       var data = await output.json();
       this.setState({LEM:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
  dialect=async(text)=>{
    const url=process.env.REACT_APP_URL+"/dialect"

    try{
      this.setState({Dialect:{}})
      const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      var data = await output.json();
      console.log(data)
      this.setState({Dialect:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }

  pos=async(text)=>{
    const url=process.env.REACT_APP_URL+"/pos"
    try{
      this.setState({POS:{}})
      const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      var data = await output.json();
      this.setState({POS:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
  tokenize=async(text)=>{
    this.setState({token:{}})
    const url=process.env.REACT_APP_URL+'/tokenize'
    try{
      const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      var data = await output.json();
      console.log(data.result['output'])
      this.setState({token:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
   get_sentiment=async(text,model)=>{
     const url=process.env.REACT_APP_URL+'/sentiment/'+model
     try{
       this.setState({sentiment:{}})
       
       const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
       var data = await output.json();
       var scores={}
       console.log(data.result['output'])
      scores['LABEL_0']=data.result['output'][0][0]['score']
      scores['LABEL_1']=data.result['output'][0][1]['score']
      scores['LABEL_2']=data.result['output'][0][2]['score']
      
      
        // scores[Object.keys(data.result['output'][0][x])[0]]=scores[Object.keys(data.result['output'][0][x])[1]]
        
    
        this.setState({sentiment:{
          "positive":scores['LABEL_2'],
          "negative":scores['LABEL_1'],
          "mixed":scores['LABEL_0'],
        }})
        console.log(this.state.sentiment)
       //this.setState({Sentiment:data.result['output']})
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
      const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      var data = await output.json();
      this.setState({NER:data.result['output']})

    }
   catch(e){
     console.log(e)
   }
  }

get_morph=async(text)=>{
  try{
    this.setState({morph:{}})
    const url=process.env.REACT_APP_URL+'/morpho'
    const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
    var data = await output.json();
      this.setState({morph:data.result['output']})
  }
  catch(e){
    console.log(e)
  }
}
  render(){

    return (
      <div className="App main-background">
        <header className='container-fluid px-0'>
          <img className="col-12 mx-0" src="images/header.png" alt=""></img>
        </header>
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
        {/* ====================================== */}
        <Route  path="/morph"  render={()=>(<Morph
         name={'Morphological Analysis'}
          task={'morph'}
          output={this.state.morph}
        handleTasks={this.handleTasks}/>)}/>
        {/* ====================================== */}
        <Route path="/" exact render={()=>(<Home/>)}/>
        <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
  
}

export default App;