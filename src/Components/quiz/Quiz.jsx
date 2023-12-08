import "./Quiz.css"
import { useEffect, useState } from "react";

  const Quiz = ()=>{
  const [data, setData] = useState([])
  const [index, setIndex] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState("")
  const [answers, setAnswers] = useState([])
  const [userAnswer, setUserAnswer] = useState("")


  useEffect(() => {

    const quizzGeneration = async () => {

        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&type=multiple`
        );
    
        const data = await response.json();
    
        setData(data)

        setCorrectAnswer(data.results[0].correct_answer)
        setAnswers(data.results[0].incorrect_answers.concat([data.results[0].correct_answer]).sort(() => Math.random() - 0.5))

      };

      quizzGeneration()
      
    },[]);




  return(
    <> {data?.results?.length > 0 ?  <div className="container">
        
    <h1>Quiz App</h1> 
    <hr></hr> 
<h2 dangerouslySetInnerHTML={{__html:data?.results && data?.results[0]?.question}}></h2>  
    <ul>
       {answers.map((el) => {
        return (
          <li style={ userAnswer !== "" && userAnswer === el && userAnswer === correctAnswer 
          ? {backgroundColor: "green"} 
          : 
              userAnswer !== "" && userAnswer === el && userAnswer !== correctAnswer
              ? {backgroundColor:"red"} 
              : null} 
              
            key={el} onClick={() => {

              if(userAnswer === "") {
                console.log(el === correctAnswer);
                setUserAnswer(el)
              }


          }}>{el}</li>
        )
       })}
    </ul>
    <button>Next</button>
    <div className="numb">1/10 questions</div>
</div> : <>Loading</>   }
    
    </>    
    )
};
export default Quiz