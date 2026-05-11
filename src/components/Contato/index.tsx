import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import {remover} from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ titulo:tituloOriginal, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [titulo, setTitulo] = useState('')




  useEffect(() => {
    if (tituloOriginal.length > 0  ){
      setTitulo (tituloOriginal)
    }
  }, [tituloOriginal])

  return (
    <S.Card>
      <S.Titulo disabled={!estaEditando} value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
      <S.Email>{email}</S.Email>
      <S.Numero>{telefone}</S.Numero>
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao onClick={() => {
              setEstaEditando(false)
              setTitulo(tituloOriginal)}}>Cancelar</S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.Botao onClick={()=> dispatch(remover(id))}>Excluir</S.Botao>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
