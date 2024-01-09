import React, { useState } from 'react'
import {
  CustomStyledButton,
  CustomStyledInput,
  CustomStyledDiv,
} from '../../styles/styles-calc'

const Gena = () => {
  const [result, setResult] = useState('')

  const handleClick = (e: any) => {
    setResult(result.concat(e.target.name))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  }

  const clear = () => {
    setResult('')
    displayClearText()
  }

  function displayClearText() {
    // Отображаем надпись "Clear"
    const bigClearText = document.createElement('div')
    bigClearText.innerHTML = 'Clear'
    bigClearText.style.position = 'fixed'
    bigClearText.style.top = '50%'
    bigClearText.style.left = '50%'
    bigClearText.style.transform = 'translate(-50%, -50%)'
    bigClearText.style.fontSize = '5rem'
    bigClearText.style.color = 'red'
    bigClearText.style.textShadow = '2px 2px 4px #000000'
    document.body.style.backgroundColor = 'black'
    document.body.appendChild(bigClearText)

    // Убираем надпись через 2 секунды
    setTimeout(() => {
      document.body.removeChild(bigClearText)
      document.body.style.backgroundColor = 'white'
    }, 500)
  }

  return (
    <>
      <CustomStyledDiv className="calculator">
        <CustomStyledInput type="text" value={result} className="input-field" />

        <CustomStyledDiv className="keypad">
          <CustomStyledButton onClick={clear}>Clear</CustomStyledButton>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button onClick={calculate} id="equal">
            =
          </button>
        </CustomStyledDiv>
      </CustomStyledDiv>
    </>
  )
}

export default Gena
