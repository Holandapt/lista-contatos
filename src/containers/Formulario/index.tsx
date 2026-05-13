import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MainContainer } from '../../styles'
import { Titulo, Botao } from '../../styles/index'
import * as S from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(titulo, email, telefone, 1)
    dispatch(
      cadastrar({
        titulo,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <S.Entradas
          type="text"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Nome"
        />
        <S.Entradas
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="E-mail"
        />
        <S.Entradas
          type="text"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
        />
        <Botao type="submit">Salvar</Botao>
      </S.Form>
    </MainContainer>
  )
}

export default Formulario
