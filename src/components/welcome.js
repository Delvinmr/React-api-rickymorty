




export default function Welcome(props) {
    // lista de frutas 

    let fruits = ['apple', 'banana', 'orange'];
  return (
    <div style={{background: 'red', width: '100%'}}>
      <h1>Welcome to React</h1>
      <p>mi primer componente.</p>
      <p>{props.message}</p>
      <p>{props.user && `Hello, ${props.user}!`}</p>
        una lista de nombres:
      <ul>
        {props.user && props.user.map((names, index) => (
          <li key={index}>{names}</li>
        ))}
      </ul>

      <p>una lista de frutas:</p>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  );

}