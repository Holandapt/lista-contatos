import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

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
