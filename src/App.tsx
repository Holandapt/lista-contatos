import React from 'react'
import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaDeContatos from './containers/ListaDeContatos'
import Menu from './containers/BarraDoTopo'

function App() {
  return (
    <>
      <EstiloGlobal />
        <Menu/>
      <Container>
        <BarraLateral/>
        <ListaDeContatos/>
      </Container>
    </>
  )
}

export default App
