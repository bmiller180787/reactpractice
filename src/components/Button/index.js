import {useEffect, useState} from "react";

const Button = () => {

const [clickCount, setClickCount] = useState(0)

    const handleClick = () => {
            console.log(clickCount)
        setClickCount(clickCount + 1)
    }

    useEffect(() => {
        console.log(clickCount)
    }, [clickCount])

    return (
        <>
        <button onClick={handleClick}>Click me to count</button>
        <p>I have clicked {clickCount} time(s)</p>
        </>
    )
}

export default Button
