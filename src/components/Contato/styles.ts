import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  cursor: pointer;
  text-align: center;
  margin: 10px;
  padding: 16px;
  border-radius: 10px;

  &:hover {
    background-color: ${variaveis.corDeFundo};
  }
`
export const Titulo = styled.textarea`
  font-size: 14px;
  font-family:
    Google Sans,
    sans-serif;
  color: ${variaveis.corDaFonte};
  border: none;
  resize: none;
  background-color: transparent;
  text-align: center;
`
export const Email = styled.textarea`
  font-size: 14px;
  font-family:
    Google Sans,
    sans-serif;
  color: ${variaveis.corDaFonte};
  border: none;
  resize: none;
  background-color: transparent;
  text-align: center;
`
export const Numero = styled.textarea`
  font-size: 14px;
  font-family:
    Google Sans,
    sans-serif;
  color: ${variaveis.corDaFonte};
  border: none;
  resize: none;
  background-color: transparent;
  text-align: center;
`
export const BarraDeAcoes = styled.div``
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  border-radius: 8px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
