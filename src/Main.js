import React, { Component } from 'react';
import HornedBeast from './HornedBeast.js';
import HornedData from './data.json';
import { Row, Form } from 'react-bootstrap';

 class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
        horns: 0
    }}

  filter= (e) =>{
    this.setState({
      horns: e.target.value});
  };

    render() {

      return (
        <>    
            <Row>

          {/* -------------------------------- Add Form for select num of Horns ---------------------------- */}

          <Form>
          <Form.Group className="mb-3" controlId="select">
            <Form.Label>Select Number of Horns: </Form.Label>
            <select  aria-label="Default select example"  onChange={(e) => this.filter(e)}>
              
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
         
            </select>
          </Form.Group>
         </Form>
         
         {/* -------------------------------------------------------------------------------------- */}
            
            {
              HornedData.map((element, i) => {
                return (

                  (Number(this.state.horns) === element.horns &&
                  
                    <HornedBeast key={i}
                      title={element.title} imageUrl={element.image_url} description={element.description} 
                      horns={element.horns} vote={0} />
                 
                      ) || (Number(this.state.horns) === 0 &&
                    
                    <HornedBeast key={i}
                      title={element.title} imageUrl={element.image_url} description={element.description}
                       horns={element.horns} vote={0} />
                  ))
              }
              )}

            </Row>
            </>
        )
    }
}

export default Main
