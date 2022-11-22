const React = require("react");
const pokemon = require("../models/pokemon");
const Index = require("./Index");

class Show extends React.Component {
    render() { 
        const {name,img} = this.props
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };

        return (
            <div>
                <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                <img src={img + ".jpg"} alt={name + " image"}></img>
                <p>
                    <a href={"/pokemon"}>Back</a>
                </p>
            </div>
        )
    }
}

module.exports = Show