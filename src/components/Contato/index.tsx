import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  titulo: tituloOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (
      tituloOriginal.length &&
      emailOriginal.length &&
      telefoneOriginal.length > 0
    ) {
      setTitulo(tituloOriginal)
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
  }, [tituloOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setTitulo(tituloOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Titulo
        disabled={!estaEditando}
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <S.Email
        value={email}
        disabled={!estaEditando}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Numero
        value={telefone}
        disabled={!estaEditando}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.Botao
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.Botao>
            <S.Botao onClick={cancelarEdicao}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao onClick={() => dispatch(remover(id))}>Excluir</S.Botao>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
