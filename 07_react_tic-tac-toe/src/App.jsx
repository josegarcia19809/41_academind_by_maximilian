import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Logs from "./components/Logs.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function App() {

    const [gameTurns, setGameTurns] = useState([]);

    let gameBoard = initialGameBoard;

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol
        const secondSquareSymbol
        const thirdSquareSymbol
    }

    const activePlayer = deriveActivePlayer(gameTurns);

    function handleSelectedSquare(rowIndex, colIndex) {
        //setActivePlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");

        setGameTurns((prevTurns) => {
            let currentPlayer = deriveActivePlayer(prevTurns);

            const updateTurns = [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns
            ];
            return updateTurns;
        })
    }

    return (
        <>
            <main>
                <div id="game-container">
                    <ol id="players" className="highlight-player">
                        <Player
                            initialName="Player 1"
                            symbol="X"
                            isActive={activePlayer === "X"}
                        />
                        <Player
                            initialName="Player 2"
                            symbol="O"
                            isActive={activePlayer === "O"}
                        />
                    </ol>

                    <GameBoard
                        onSelectSquare={handleSelectedSquare}
                        board={gameBoard}
                    />
                </div>
                <Logs
                    turns={gameTurns}
                />
            </main>
        </>
    )
}

export default App
