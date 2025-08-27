


const Hello = (props) => {
  console.log(props)
  return (
    <>
    <p>Hello {props.name}, you are {props.age} years old!</p>
  </>
  )
}

const App = () => {
  console.log("Hello from komponentti");
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  const nimi = "Pekka"
  const ika = 10
  const friends = [
    {name: 'Leevi', age: 4},
    {name: 'Venla', age: 10},
  ]
  return (
    <div>
    <h2>Ensin "Hello World" ja aika</h2>
      <p>Hello world, it is {now.toString()}</p>
      <h2>Sitten kahden muuttujan yhteenlasku</h2>
      <p>
        {a} + {b} = {a + b}
        <h2>Välitetään dataa komponenttin Hello</h2>
        <Hello name={nimi} age={ika}/>
        <Hello name="Maja" age={26 + 10}/>
      </p>
    <h3>Friends part:</h3>
     <p>{friends[0].name} is {friends[0].age} years old</p>
     <p>{friends[1].name} is {friends[1].age} years old</p>

    </div>
  )
}

export default App


