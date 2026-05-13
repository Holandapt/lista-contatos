import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Google Sans, san-serif;
    list-style-type: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
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

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Botao = styled.button`
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
  border: none;
  margin: 16px 0;
  float: right;

  &:hover {
    box-shadow: 0 0 10px -2px ${variaveis.corDaBorda};
  }
`

export default EstiloGlobal
