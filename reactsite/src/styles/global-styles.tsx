import { createGlobalStyle } from 'styled-components'

export const primaryColor = '#ff0000'
export const secondaryColor = '#cc0000'
export const textColor = '#ffffff'
export const inputBorderColor = '#ccc'
export const inputBackgroundColor = '#f8f8f8'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${inputBackgroundColor};
    color: #333333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.5rem;
    color: #333333;
    margin-bottom: 1.5rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 2px solid #007bff;
    border-radius: 5px;
    transition: all 0.3s ease;
    margin: 10px;

    &:hover {
      background-color: #007bff;
      color: #ffffff;
    }
  }

  h2 {
    font-size: 2rem;
    color: #555555;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    transition: all 0.3s ease;
    margin: 10px;

    &:hover {
      background-color: ${secondaryColor};
    }
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid ${inputBorderColor};
    border-radius: 4px;
    margin: 5px 0;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
    margin: auto;
  }

  .calculator {
    border: 1px solid ${inputBorderColor};
    padding: 20px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }

  .input-field {
    width: 90%;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .keypad {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
  }

  .keypad button {
    padding: 10px;
    font-size: 16px;
  }
`

export default GlobalStyles
