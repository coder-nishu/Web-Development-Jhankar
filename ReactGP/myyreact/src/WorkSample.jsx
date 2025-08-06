// export default function WorkSample({year,experience,institute}) {
//   return (
//     <div>
//         <span>{year}</span>
//         <h2>{experience}</h2>
//         <p>{institute}</p>
//     </div>
//   )
// }


export default function WorkSample({works}) {
    const myStyle = {
        border: "1px solid black",
        backgroundColor: "green",
        color: "white",
        borderRadius: "10px",
        padding: "10px",
        marginTop: "10px",

    };
    const {year,experience,institute} = works;
    return (
    <div style={myStyle}>
      <span>{year}</span>
      <h2>{experience}</h2>
      <p>{institute}</p>
    </div>
  );
}
