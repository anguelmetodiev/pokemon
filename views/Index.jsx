const React = require("react")
// const pokemon = require("../models/pokemon")

const myStyle = {
    color:'#ffffff'
}

class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return (
            <div>
            <h1>PokeDEX</h1><br></br>
            <img src='https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png'></img>
            <nav>
                <a href = "/pokemon/new">Create Your Pokemon</a>
            </nav>
            <ul>
                {pokemon.map((pokemon,x) =>{
                    return(
                        <li key = {x}>
                            <a href = {`/pokemon/${pokemon.id}`}>
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                {pokemon[x]}
                            </a>
                        </li>
                    )
                })}
            </ul>
            </div>
        )
    }
}

module.exports= Index