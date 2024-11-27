import React, { useState } from 'react'

function Newtictac() {
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [isdisable, setIsdisable] = useState(false);
  const [pvalue, setPvalue] = useState();
  const [win, setWin] = useState(pvalue);
  const handelclick = (e) => {
    if (currentPlayer === "X") {
      setCurrentPlayer("O")
    } else {
      setCurrentPlayer("X")
    }
    const val = e.target.id;
    document.getElementById(val).setAttribute('disabled', true);
    document.getElementById(val).innerText = (currentPlayer === 'X' ? 'O' : 'X');
    const win = calculateWin(pvalue);
    if (win) {
      setWin(win);
      for (let i = 0; i < 9; i++) {

        document.getElementById(i).setAttribute('disabled', true);
      }
    }
  }
  const clearClick = (e) => {
    setPvalue(null);
    setWin(null);
    for (let i = 0; i < 9; i++) {

      //document.getElementById(i).innerText = null;
      document.getElementById(i).setAttribute('disabled', true);
    }
    
    setCurrentPlayer('X');
  }
  const calculateWin = (pvalue) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      const value1 = document.getElementById(a).innerText;
      const value2 = document.getElementById(b).innerText;
      const value3 = document.getElementById(c).innerText;
      if (value1 === value2 && value2 === value3) {
        return value1;
      }
    }
    return null;
  }
  return (
    <div className='h-auto'>
      <h2 className='text-center pt-4 font-serif text-green-600 text-2xl'>Tic Toc Toe Game In React</h2>
      <div className="flex w-72 flex-wrap m-auto mt-6 ">
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="0"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="1"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="2"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="3"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="4"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="5"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="6"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="7"></button>
        <button className="h-20 w-20 border border-black flex items-center justify-center  font-bold" onClick={handelclick} id="8"></button>
      </div>
      {win ? (<p className="text-2xl text-green-400 mb-3 text-center">
        Winner is:{win}
      </p>) :
        (<p className="text-2xl text-green-400 mb-3 text-center">
          Next Player:{currentPlayer === 'X' ? 'O' : 'X'}
        </p>)}
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={clearClick}>Reset</button>
      </div>
    </div>
  )
}

export default Newtictac
