import React, { Component } from 'react';
import HornedBeast from './HornedBeast.js';
import HornedData from './data.json';
import { Row } from 'react-bootstrap';

 class Main extends Component {
    render() {
        return (
            <Row>
           {
                    HornedData.map((beast,index)=>{
                        return <HornedBeast key={index}
                         title={beast.title}
                         imageUrl={beast.image_url}
                          description={beast.description}
                          vote={0}
                        />
                        
                    })
                }
            </Row>

        )
    }
}

export default Main
