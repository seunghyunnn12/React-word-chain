import React, { useState, useRef } from 'react'
import './WordGame.scss'

const WordGame = ({ firstWord }) => {

    // console.log(firstWord)

    const [word, setWord] = useState(firstWord)
    const [userInput, setUserInput] = useState('')

    const [message, setMessage] = useState('끝말잇기 시작!')
    const InputRef = useRef(null)

    const handleChange =(e)=> {
        setUserInput(e.target.value)
    }

    const checkWord=()=> {

        const trimmedWord = userInput.trim()

        if(!trimmedWord) {
            setMessage('단어를 입력하세요!')
            return
        }

        const lastChar = word[word.length-1]
        const firstChar = trimmedWord[0]

        console.log(lastChar, firstChar);

        if(lastChar !== firstChar) {
            setMessage('틀렸습니다 다시 하세욥')
            setUserInput('')
        } else {

            setMessage('정답입니다! 다음 단어를 입력하세요')
            setUserInput('')
            setWord(trimmedWord)
        }








        InputRef.current.focus()
    }

    return (
        <div className='game-container'>
            <h2>끝말잇기 게임</h2>
            <p className="current-word">{word}</p>
            <p>{userInput}</p>
            <input
                value={userInput}
                type="text"
                ref={InputRef}
                onChange={handleChange}
                placeholder='단어를 입력하세요'
                onKeyUp={(e)=>e.key==='Enter'&& checkWord()}
            />
            <button onClick={checkWord}>확인</button>
            <p className="message">{message}</p>
        </div>
    )
}

export default WordGame