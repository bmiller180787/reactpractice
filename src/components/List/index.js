const List = () => {
    const items = ['Bananas', 'Peanut butter', 'Jaffa Cakes', 'Bleach']

    return (
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}

export default List