import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container, Info, Informacoes, Titulo } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <Titulo>Contatos</Titulo>
      <Informacoes>
        <Info>Título</Info>
        <Info>E-mail</Info>
        <Info>Número de telefone</Info>
      </Informacoes>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.titulo}>
            <Contato
              titulo={c.titulo}
              email={c.email}
              telefone={c.telefone}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
