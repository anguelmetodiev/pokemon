const React = require("react")
const pokemon = require("../models/pokemon")

class Index extends React.Component {
    render() { 
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };

        return (
            <div>
                <h1 style={myStyle}>See All The Pokemon!</h1>
                <ul>
                    {
                        pokemon.map((pokemon, i) => {
                            return (
                                <li key = {i}>
                                    <a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index