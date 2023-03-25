/*
Writing my own code from scratch for a mental arithmetic app
*/ 

function Question(){

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
        if(e.target.value==question.answer){
            console.log('CORRECT!')
            window.location.href='/'
        }
    }

    return (
    <div>
        <h1>{question.question}</h1>
        <input onInput={handleInput}></input>
    </div>)
}

export default Question;

