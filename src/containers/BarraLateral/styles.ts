import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #f0f4f9;
  border-radius: 10px;
  height: 100vh;
`

export const BarraDeAcao = styled.div`
  padding: 20px;
`

export const BotaoAdicionar = styled(Link)`
  text-decoration: none;
  color: ${variaveis.corDaFonte};
  background-color: #cccc;
  border-radius: 10px;
  padding: 16px;
  background-color: #c2e7ff;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  display: inline-block;

  &:hover {
    box-shadow: 0 0 10px -2px ${variaveis.corDaBorda};
  }
`
