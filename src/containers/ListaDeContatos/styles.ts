import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h1`
  font-size: 24px;
  color: ${variaveis.corDoTitulo};
  font-family:
    Google Sans,
    sans-serif;
  margin-top: 16px;
  padding: 16px;
`

export const Informacoes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  border-bottom: 1px solid ${variaveis.corDaBorda};
  margin: 16px;
  text-align: center;
`
export const Info = styled.label`
  font-size: 14px;
  font-family:
    Google Sans,
    sans-serif;
  color: ${variaveis.corDoTitulo};
  padding: 0 0 14px;
  align-items: center;
`
