import { useState,useEffect} from 'react'

export const LearnUseEffect = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)
    function increment(e) {
        //setNum(num+1)
        setNum((previous)=>previous+1)
        e.preventDefault();
    }
    function increment2(e) {
        setNum2((previous)=>previous+1)
        
        e.preventDefault();
    }
    // useEffect(() => {
    //     console.log("Number count is " + num);
    // },[num])
    /**Use effect with cleanup */
    useEffect(() => {
        console.log("Number count is " + num);
        return () => {
            console.log("Cleanup effect is ")
        }
    },[num])
  return (
      <>
          <h2>Learn useState</h2>
          <p>Number: {num}</p>
          <p>Number2: {num2}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={increment2}>Increment 2</button>
      </>
  )
}