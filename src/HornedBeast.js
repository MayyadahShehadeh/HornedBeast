import React, { Component } from 'react'


export class HornedBeast extends Component {
    render() {
        let HornedBeastArray=[
            {
           title:'UniWhal',
           img:'./imgs/Unicorn_and_Narwhal_by_dinglehopper.jpg',
          description:'"A unicorn and a narwhal nuzzling their horns',

            },
            {
                title:'"Unicorn Head',
                img:'./imgs/wholesale-halloween-costume-prop-unicorn.jpg',
               description:'Someone wearing a creepy unicorn head mask',
            }        
        ]
        return (
            <div>
             <HornedBeast title={HornedBeastArray[0].title} img={HornedBeastArray[0].img} description={HornedBeastArray[0].description}/>
             <HornedBeast title={HornedBeastArray[1].title} img={HornedBeastArray[1].img} description={HornedBeastArray[1].description}/>
            
            </div>
        )
    }
}

export default HornedBeast
