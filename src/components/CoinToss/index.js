const CoinToss = () => {

    const flipCoin = () => {
        return Math.random() < 0.5 ? 'heads' : 'tails'
    }

    const pics = {
        kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
        doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
    }

    return (
        <img src={pics[flipCoin() === 'heads' ? 'kitty' : 'doggy']}/>
    )
}

export default CoinToss