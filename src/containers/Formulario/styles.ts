import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  padding: 16px;
`
export const Entradas = styled.input`
  width: 100%;
  margin: 8px 0;
  padding: 10px;
  border: 1px solid ${variaveis.corDaBorda};
  border-radius: 5px;
  background-color: #f0f4f9;
  font-size: 14px;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${variaveis.corDaBorda};
    box-shadow: 0 0 10px ${variaveis.corDeFundo};
  }
`
