import {useState} from "react";

function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((prevState) => !prevState);
    }

    return (
        <>
            <li>
                <span className="player">
                    {
                        !isEditing ? (<span className="player-name">{name}</span>) :
                            (<input type="text" required value={name}/>)
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