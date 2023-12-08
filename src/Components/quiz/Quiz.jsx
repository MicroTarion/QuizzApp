import { Box } from "@chakra-ui/react";
import "./Quiz.css"
<<<<<<< HEAD

const Quiz = () => {
    return (
        <>
        <Box className="quiz-container">
        <div className="container">
=======
import { useEffect, useState } from "react";

  const Quiz = ()=>{
  const [data, setData] = useState([])

  useEffect(() => {

    const quizzGeneration = async () => {

        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&type=multiple`
        );
    
        const data = await response.json();
    
        setData(data)
      };

      quizzGeneration()
      
    },[]);
  return(
    <>
    <div className="container">
>>>>>>> Quizz
                <h1>Quiz App</h1> 
                <hr></hr> 
                <h2>notre question</h2>
                <ul>
                    <li>reponse1</li>
                    <li>reponse1</li>
                    <li>reponse1</li>
                    <li>reponse1</li>
                </ul>
                
                <div className="numb">1/10 questions</div>
            </div>
<<<<<<< HEAD
        </Box></>
        
    );
  };
  
  export default Quiz;
=======
        <div>
            <form action="">
            <label htmlFor="movieSearch"></label>
            <input
                name="movieSearch"
                type="submit"
                value="Quizz Generation"
            />
            </form>
        </div>       
    </>    
    )
};
export default Quiz
>>>>>>> Quizz
