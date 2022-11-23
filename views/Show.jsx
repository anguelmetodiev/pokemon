const React = require('react')

const myStyle = {
    color:'#ffffff'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <div>
            <h1>Pokemon Battle!</h1>
            <h2>I Summon {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <br></br>
            <div>
                <img src = {pokemon.img}/> 
            </div>
            <a href = '/pokemon'> Back </a>
            </div>
        )
    }
}

module.exports= Index