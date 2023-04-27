import {useEffect, useState} from "react";

const BitcoinPrice = () => {

    const [rate, setRate] = useState(0)
    let change = 0

    useEffect(() => {
    const startRate = getBTCData()
    },[])

    const getBTCData = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(res => res.json())
            .then(data => {
                setRate(data.bpi.GBP.rate_float)
            })
    }

    useEffect(() => {
        getBTCData()
        setInterval(getBTCData, 3000)
    },[])

    useEffect(() => {
        change = startRate - rate
    },[rate])

    return (
        <>
            <p>Current price of BTC is: £{rate}</p>
            <p>which is a change if {change} since you logged in</p>
        </>
    )
}

export default BitcoinPrice