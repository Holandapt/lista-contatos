import { useDispatch, useSelector } from 'react-redux'
import { Campo, CampoPesquisa, Menu, Tema } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const MenuSuperior = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Menu>
      <Tema>Contatos</Tema>
      <CampoPesquisa>
        <Campo
          type="text"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          placeholder="Pesquisa"
        />
      </CampoPesquisa>
    </Menu>
  )
}

export default MenuSuperior
