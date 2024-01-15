import { useState,useMemo } from "react"
export const LearnUseMemo = () => {
    const [num, setNum] = useState(0)
    const [sum, setSum] = useState(0)
    function handleIncrement(e) {
        setNum(num + 1)
        if (num % 3 == 0) {
            handleSum()
        }
        e.preventDefault();
    }
    function handleSum() {
        setSum(sum+10)
    }
    const discount = useMemo(() => {
        console.log('UseMemo');
            return sum * 4;

    },[sum])

  return (
      <>
          <h2>Learn Use Memo</h2>
          <p>Discount:{discount}</p>
          <p>Sum:{sum}</p>
          <p>Num:{num} </p>
          <button onClick={handleIncrement}>Increment</button>
      </>
  )
}
