import React, { useState } from 'react'

const Mega = props => {
    const [numeros, setNumeros] = useState(Array(props.quantidade).fill(0))
    
    function gerarNumeroNaoContido(array) {
        const min = 1;
        const max = 60;
        const novoNumero = parseInt(Math.random() * (max - min)) + min;

        return array.includes(novoNumero)
            ? gerarNumeroNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const valores = Array(props.quantidade)
            .fill(0)
            .reduce((acc, e) => {
                const novoNumero = gerarNumeroNaoContido(acc)
                return [...acc, novoNumero]
            }, [])
            .sort((a,b) => a - b)
        setNumeros(valores)
    }

    return (
        <>
            <h1>Mega-Sena</h1>
            <h2>{numeros.join(' ')}</h2>
            <button type="button" onClick={gerarNumeros}>Gerar Numeros</button>
        </>
    )
}

export default Mega