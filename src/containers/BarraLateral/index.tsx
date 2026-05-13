import { useNavigate } from 'react-router-dom'
import { Botao } from '../../styles'
import * as S from './styles'

type Props = {
  mostrarContatos: boolean
}

const BarraLateral = ({ mostrarContatos }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      {mostrarContatos ? (
        <>
          <S.BarraDeAcao>
            <S.BotaoAdicionar to="/novo"> Criar contato</S.BotaoAdicionar>
          </S.BarraDeAcao>
        </>
      ) : (
        <Botao type="button" onClick={() => navigate('/')}>
          Voltar a lista de contatos
        </Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
