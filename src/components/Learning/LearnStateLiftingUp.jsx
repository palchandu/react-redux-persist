import React from 'react'

export const LearnStateLiftingUp = (props) => {
    function handleData(e) {
        let data = "Chandra Prakash"
        props.childData(data);
        e.preventDefault()  
    }
  return (
      <>
          <h2>Leann to send data from child to parent component</h2>
          <button onClick={handleData}>Send Data</button>
      </>
  )
}
