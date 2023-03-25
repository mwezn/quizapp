/*
Writing my own code from scratch for a mental arithmetic app
*/ 

import React from 'react'

function Question(){
    const [data, setData] = React.useState({question_no:1, num_of_questions:10,question:q2()})

    function random(){
        return Math.floor(10+Math.random()*100)
    }
    
    function q2(){
        let x=random();
        let y=random();
        return {question:`What is ${x} * ${y} ?`,answer:x*y}
    }
    let question= q2();
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

    return (
    <div>
        <h1>{data.question_no}</h1>
        <h3>{data.question.question}</h3>
        <input onInput={handleInput}></input>
    </div>)
}

export default Question;

