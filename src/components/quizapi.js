import React from 'react'

class Quiz extends React.Component{
    constructor(props){
      super(props);
      this.state={
        heading:"Topic:General",
        score:0,
        questions: null,
        questIndex: 0,
        choices:null,
        correctChoice:null,
        URL:"https://quizapi.io/api/v1/questions?"
      }
      this.onclick=this.onclick.bind(this);
    }
    
   
  
    
   async componentDidMount(){
      const resp = await fetch(this.state.URL,{
        method: 'GET',
        headers: {
          'X-Api-Key':'Rr8TECTQcOpUk7zRNC9sQYHoTdl5A2p5kJhEt8HJ',
          "Content-Type": "application/json"
        }
      })
    const data = await resp.json();
    this.setState({questions: data, choices: data.map(i=>i.answers).map(i=>Object.entries(i)),correctChoice: data.map(i=>i.correct_answers).map(i=>Object.values(i)).map(f=>f.indexOf("true"))})
    
    console.log(data)
    console.log(this.state.correctChoice)
    console.log(this.state.choices)
  }
   
  dropDown(){
     return(
      <div className="dropdown">
         <label className="shadow"><b>Select Quiz Topic:</b></label>
       <div className="dropdown-content">
         <p onClick={()=>{this.setState({URL:"https://quizapi.io/api/v1/questions?category=code",score:0, questIndex:0,heading:"Topic:Javascript"});this.componentDidMount()}}> <b>Code</b></p>
         <p onClick={()=>{this.setState({URL:"https://quizapi.io/api/v1/questions?category=linux",score:0,questIndex:0,heading:"Topic:Linux"});this.componentDidMount()}}> <b>Linux</b></p>
       </div>
     </div>)
    }
    quizEnd(){
      return(
      <p className="btn0"> Youve scored: {this.state.score} out of {this.state.questions.length}</p>)
      
    }
    
    onclick(event){
      this.setState({questIndex:this.state.questIndex+1})
      const id=event.currentTarget.id
      if (id==this.state.correctChoice[this.state.questIndex]){
        this.setState({score: this.state.score +=1})
      }
    }
    
      render(){
       
      if (!this.state.questions) return <span>Loading...</span>;
      else if (this.state.questIndex==19) return this.quizEnd()
       
       
      
   return (
     <div>
     <div className="board-row">{this.dropDown()}</div>
        <div>
         <p id="q">Q{this.state.questIndex+1} of {this.state.questions.length} <br/> {this.state.questions[this.state.questIndex].question} <br/> Category:{this.state.questions[this.state.questIndex].category}</p>
          <div className="board-row">
            {this.state.choices[this.state.questIndex].map((answerOption,index) => (
                answerOption[1]!=null?<button key={answerOption[0]} id={index} onClick={(event)=>this.onclick(event)} className="btn0">{answerOption[1]}</button>:null
           ))}
           
            
          </div>
          
          <div className="board-row">
            <p> Youve scored: {this.state.score}</p>
          
          </div>
        </div>
       </div>
      );
    }
  }
  
  export default Quiz;
  