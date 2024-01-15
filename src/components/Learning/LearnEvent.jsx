export const LearnEvent = () => {
    function handleHello(e) { 
        e.preventDefault(); 
        console.log("Hello")
    }
    function handleHello2(name) {
        console.log(name)
    }
  return (
      <>
           { /** Without parameter */}
          <button onClick={handleHello} type="button">Click Me</button>

             { /** With parameter */}
          <button onClick={(e)=>handleHello2('Chandra Prakash')} type="button">Click Me</button>

      </>
  )
}
