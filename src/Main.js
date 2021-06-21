import React, { Component } from 'react'
import HornedBeast from "./HornedBeast";

export class Main extends Component {
    render() {
            
        
                 let HornedBeastArray=[
            {
           title:'UniWhal',
           imageUrl:"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
          description:'"A unicorn and a narwhal nuzzling their horns',

            },
            {
                title:'Unicorn Head',
                imageUrl:"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
               description:'Someone wearing a creepy unicorn head mask',
            }        
        ]
        return (
            <div>
             <HornedBeast title={HornedBeastArray[0].title} imageUrl={HornedBeastArray[0].imageUrl} description={HornedBeastArray[0].description}/>
             <HornedBeast title={HornedBeastArray[1].title} imageUrl={HornedBeastArray[1].imageUrl} description={HornedBeastArray[1].description}/>
            
            </div>

        )
    }
}

export default Main
