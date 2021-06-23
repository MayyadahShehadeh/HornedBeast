import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import {Modal} from 'react-bootstrap/';


class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vote: props.vote,
            show: false
        }

    }
    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    plusVote = () => {
        this.setState({
            vote: this.state.vote + 1
        })
    }
    render() {
        console.log(this.state)
        return (
          
                <Col>
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src= {this.props.imageUrl} alt={this.props.title} width="300px" height="300px" />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.description}
                    </Card.Text>
                <Button variant="primary" onClick={this.plusVote}>Vote</Button>
                ❤ {this.state.vote} 
                <Button variant="primary" onClick={this.showModal}>Show Details</Button>
            </Card.Body>
        </Card>
               

                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                    <img src={this.props.imageUrl} alt={this.props.title}  width="350px" height="300px"/>
                    <p>{this.props.description}</p>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideModal}> Close</Button>
                    </Modal.Footer>
                </Modal>
                </Col>
         
        )
    }
}

export default HornedBeast
