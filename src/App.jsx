const Hello = (props) => {
  console.log(props)
  return (
    <>
    <p>Hello {props.name}, you are {props.age} years old.</p>
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
    </div>
  )
}

export default App


