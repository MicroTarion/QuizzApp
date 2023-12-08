const QuizzGeneration = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&type=multiple`
    );

    const data = await response.json();

    console.log(data);
  };
  
  const Quizz = ()=>{

  
  return(
        <div>
            <form action="">
            <label htmlFor="movieSearch"></label>
            <input
                name="movieSearch"
                type="submit"
                value="Quizz Generation"
                onClick={QuizzGeneration}
            />
            </form>
        </div>       
            
    )
};
 export default Quizz