import React from 'react'
import produtos from '../../data/products'

const Repeticao = props => {
    function getProdutosListItem(produtos) {
        return produtos.map(prod => {
            return <li key={prod.id}>{prod.id} - {prod.name} => R$ {prod.price}</li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem(produtos)}
            </ul>
        </div>
    )
}

export default Repeticao