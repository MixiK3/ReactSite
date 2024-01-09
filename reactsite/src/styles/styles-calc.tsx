import styled from 'styled-components'
import { Button } from 'antd'
import {
  primaryColor,
  secondaryColor,
  textColor,
  inputBorderColor,
  inputBackgroundColor,
} from './global-styles'

export const CustomStyledButton = styled(Button)`
  background-color: ${primaryColor};
  color: ${textColor};
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  height: auto;

  &:hover {
    background-color: ${secondaryColor};
  }
`

export const CustomStyledInput = styled.input`
  padding: 15px;
  font-size: 20px;
  border: 1px solid ${inputBorderColor};
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: right;
`

export const CustomStyledDiv = styled.div`
  background: linear-gradient(to bottom, #333333, #555555);
  color: ${textColor};
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
`

export const CustomStyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
`

export const CustomStyledKeypadButton = styled.button`
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid ${inputBorderColor};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${inputBackgroundColor};
  }
`
