export default function Products() {
    const products = [
        {title: "Cabbage", cat: "vegetable", id: 1},
        {title: "Garlic", cat: "vegetable", id: 2},
        {title: "Apple", cat: "fruit", id: 3},
    ]

    const handleClick = cat => {
        alert(`Category: ${cat}`)
    }
    
    const listItems = products.map(product => {
        return <li key={product.id} onClick={() => handleClick(product.cat)}>{product.title}</li>
    })

    return (
        <>
            <h2>Products List</h2>
            <ol>{listItems}</ol>
        </>
    )
}