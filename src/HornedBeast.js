import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';


 class HornedBeast extends Component {
     constructor(props){
         super(props )
     this.state={
        vote:props.vote
     }
     
    }
    plusVote = ()=>{
    this.setState({
        vote:this.state.vote+1})
    }
    render() {
        console.log(this.state )
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {this.props.imageUrl} alt={this.props.title} width="300px" height="300px" />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description}
                    </Card.Text>
                <Button variant="primary" onClick={this.plusVote}>Vote</Button>
                ❤ {this.state.vote}
            </Card.Body>
        </Card>

        )
    }
}

export default HornedBeast
