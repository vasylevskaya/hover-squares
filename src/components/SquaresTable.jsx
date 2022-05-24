import { useEffect, useState } from "react"

import History from "./History"

const SquaresTable = ({ mode }) => {
  const [squares, setSquares] = useState([])
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (mode) {
      const newArrayOfSquares = new Array(mode * mode).fill(0)
      setSquares(newArrayOfSquares)
    }
  }, [mode])

  const onHoverSquare = (index) => {
    const newSquares = [...squares]
    newSquares[index] = newSquares[index] === 0 ? 1 : 0
    setSquares(newSquares)
    setHistory((prevHistory) => {
      let newHistory = [
        {
          row: Math.ceil(index / mode),
          column: index % mode + 1
        },
        ...prevHistory
      ]
      if (newHistory.length > 7) {
        newHistory = newHistory.slice(0, 7)
      }
      return newHistory
    })
  }

  return (
    <div className="squares">
      {
        squares.length > 0 && (
          <>
            <div
              className="squares-board"
              style={{
                width: mode * 40,
                height: mode * 40
              }}
            >
              {
                squares.map((square, index) => (
                  <div
                    key={`square_${index}`}
                    className={`square ${square === 1 ? 'touched' : 'untouched'}`}
                    onMouseEnter={ () => onHoverSquare(index)}
                  > </div>
                ))
              }
            </div>
            <History history={history} />
          </>
        )
      }
    </div>
  )
}

export default SquaresTable
