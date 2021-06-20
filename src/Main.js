import React, { Component } from 'react'
import HornedBeast from "./HornedBeast";

export class Main extends Component {
    render() {
        return (
            
            <div>
<HornedBeast/>
                <h2>{this.props.title}</h2>
            
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Main
