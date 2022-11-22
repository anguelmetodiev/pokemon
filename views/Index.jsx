const React = require("react")

class Index extends React.Component {
    render() { 
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            };

        return (
            <div>
                <h1 style={myStyle}>See All The Pokemon!</h1>
            </div>
        )
    }
}

module.exports = Index