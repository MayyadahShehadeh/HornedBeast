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
            <div>
                <Col>
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

                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                    <img src={this.props.imageUrl} alt={this.props.title}/>
                    {this.props.descreption}
                     </div>
                      </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}> Close</Button>
                    </Modal.Footer>
                </Modal>
                </Col>
            </div>
        )
    }
}

export default HornedBeast
