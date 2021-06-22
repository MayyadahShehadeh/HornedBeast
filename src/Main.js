import React, { Component } from 'react';
import HornedBeast from './HornedBeast.js';
import HornedData from './data.json';

 class Main extends Component {
    render() {
        return (
            <div>
           {
                    HornedData.map((beast,index)=>{
                        return <HornedBeast key={index} title={beast.title}
                         imageUrl={beast.image_url}
                          description={beast.description}
                          vote={0}
                        />
                        
                    })
                }
            </div>

        )
    }
}

export default Main
