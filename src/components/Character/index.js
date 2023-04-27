import {useEffect, useState} from "react";

const Character = () => {
    const [data, setData] = useState({})
    const [homeworld, setHomeworld] = useState({})
    const [characterID, setCharacterID] = useState(1)

    const nextCharacter = () => {
        setCharacterID(characterID + 1)
    }

    useEffect(() => {
       fetch('https://swapi.dev/api/people/' + characterID)
           .then(res =>res.json())
           .then(data => {
                setData(data)
           })
    },[characterID])

    useEffect(() => {
        if(data.homeworld) {
            fetch(data.homeworld)
                .then(res => res.json())
                .then(data => {
                    setHomeworld(data)
                })
        }
    },[data])

    return (
        <>
            <ul>
                <li>Name: {data.name}</li>
                <li>Height: {data.height}</li>
                <li>Mass: {data.mass}</li>
                <li>Homeworld: {homeworld.name}</li>
            </ul>
            <button onClick={nextCharacter}>Show me next character</button>
        </>
    )
}

export default Character
