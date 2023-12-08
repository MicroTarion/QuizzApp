const findAnswers = async ()=>{
    const response = await fetch(`https://opentdb.com/api.php?amount=10&type=multiple`);
    const data = await response.json();

    console.log(data);
    return(
      <p> Hey {data}</p>
       )
}

const Answers = ()=>{
    return(
       findAnswers
    )
}
export default Answers