import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container, Info, Informacoes, Titulo } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const {itens} = useSelector((state:RootReducer) => state.contatos)

  return (
  <Container>
    <Titulo>Contatos</Titulo>
    <Informacoes>
      <Info>Título</Info>
      <Info>E-mail</Info>
      <Info>Número de telefone</Info>
    </Informacoes>
    <ul>
      {itens.map((c) => (
        <li key={c.titulo}>
          <Contato titulo={c.titulo} email={c.email} telefone={c.telefone} id={c.id} />
        </li>
      ))}
    </ul>
  </Container>
)
}

export default ListaDeContatos
