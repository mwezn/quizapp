/*
Writing my own code from scratch for a mental arithmetic app
*/ 

import React from 'react'

function Question(){
    const [data, setData] = React.useState({question_no:1, num_of_questions:2,question:q2()})

    function random(){
        return Math.floor(10+Math.random()*100)
    }
    
    function q2(){
        let x=random();
        let y=random();
        return {question:`What is ${x} * ${y} ?`,answer:x*y}
    }
    
    const handleInput=(e)=>{
        console.log(e.target.value)
        if(e.target.value==data.question.answer){
            console.log('CORRECT!')
            e.target.value=''
            const newObj = { question_no: data.question_no+=1,question:q2()}
            setData(old=>{
                return {...old, ...newObj}
            })
        }
    }
  
    const endOfQuiz= data.question_no<=data.num_of_questions?<h1>Question {data.question_no} of {data.num_of_questions}</h1>:<h1>End of Quiz</h1>

    return (
    <div>
        {data.question_no<=data.num_of_questions?
        <div>
        <h1>Question {data.question_no} of {data.num_of_questions}</h1>
        <h3>{data.question.question}</h3><input onInput={handleInput}></input>
        </div>:<h1>End of Quiz</h1>
        }
        
        
    </div>
    )
}

export default Question;

