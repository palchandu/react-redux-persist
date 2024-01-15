/* eslint-disable react/prop-types */
// const LearnPorps = (props) => {
//   return (
//       <>
//           <h2 className="title">Learn Props</h2>
//           <p>Name: {props.name}</p>
//           <p>Degignation: { props.role}</p>
//       </>
//   )
// }
const LearnPorps = ({name,role}) => {
  return (
      <>
          <h2 className="title">Learn Props</h2>
          <p>Name: {name}</p>
          <p>Degignation: { role}</p>
      </>
  )
}

export default LearnPorps