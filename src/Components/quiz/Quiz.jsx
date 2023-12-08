import { Box } from "@chakra-ui/react";
import "./Quiz.css"


// const Quiz = () =>{
//     return (
//        <>
//             <div className="container">
//                 <h1>Quiz App</h1> 
//                 <hr></hr> 
//                 <h2>notre question</h2>
//                 <ul>
//                     <li>reponse1</li>
//                     <li>reponse1</li>
//                     <li>reponse1</li>
//                     <li>reponse1</li>
//                 </ul>
//                 <button>Next</button>
//                 <div className="numb">1/10 questions</div>
//             </div>
//        </>
//     )
// }
// export default Quiz

const Quiz = () => {
    return (
        <>
        <Box className="quiz-container">
        <div className="container">
                <h1>Quiz App</h1> 
                <hr></hr> 
                <h2>notre question</h2>
                <ul>
                    <li>reponse1</li>
                    <li>reponse1</li>
                    <li>reponse1</li>
                    <li>reponse1</li>
                </ul>
                <button>Next</button>
                <div className="numb">1/10 questions</div>
            </div>
        </Box></>
        
    );
  };
  
  export default Quiz;