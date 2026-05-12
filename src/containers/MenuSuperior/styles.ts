import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Menu = styled.header`
  display: grid;
  grid-template-columns: 224px 50%;
  padding: 8px;
  align-items: center;
`

export const Tema = styled.h1`
  font-size: 22px;
  padding: 0 16px;
`

export const CampoPesquisa = styled.div`
  padding: 0 40px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  border: transparent;
  background-color: #f0f4f9;
  border-radius: 8px 8px 0 0;
  font-size: 16px;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${variaveis.corDaBorda};
    box-shadow: 0 0 10px ${variaveis.corDeFundo};
  }
`
