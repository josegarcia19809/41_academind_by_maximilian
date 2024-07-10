import {useState} from "react";

function Player({initialName, symbol, isActive}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <>
            <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {
                        !isEditing ? (<span className="player-name">{playerName}</span>) :
                            (<input type="text" required value={playerName}
                                    onChange={handleChange}/>)
                    }
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button
                    onClick={() => handleEditClick()}
                >{isEditing ? "Save" : "Edit"}
                </button>
            </li>
        </>
    );
}

export default Player;