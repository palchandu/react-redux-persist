import { useState} from 'react'

export const LearnState = () => {
    const [num, setNum] = useState(0)
    function increment(e) {
        //setNum(num+1)
        setNum((previous)=>previous+1)
        e.preventDefault();
    }
    function decrement(e) {
        if (num > 0) {
            setNum(num-1)
        } else {
            console.warn("Invalid number")
        }
        
        e.preventDefault();
    }
  return (
      <>
          <h2>Learn useState</h2>
          <p>Number: {num}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
      </>
  )
}
