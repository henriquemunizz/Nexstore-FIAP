import { Button } from './Button'

function App() {


  const textoBotoes = ['Botao1', 'Botao2', 'Botao3', 'Botao4', 'Botao5']

  return (
    <div>
      <h1>Hello world</h1>

      {textoBotoes.map((text) => (
        <Button text={text} />
      ))}
    </div>
  )
}

export default App
