import React, { Component } from 'react';
import HornedBeast from './src/HornedBeast.js';

 class Main extends Component {
    render() {
        // raiseVote=(vote)=>{
        // return vote+1
        // }
        
                 let HornedBeastArray=[
            {
             title:'UniWhal',
             imageUrl:"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
             description:'"A unicorn and a narwhal nuzzling their horns',

            },
            {
            image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
            title: "Rhino Family",
            description: "Mother (or father) rhino with two babies",
            },
            {
            title:'Unicorn Head',
            imageUrl:"https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
            description:'Someone wearing a creepy unicorn head mask',
            },
            {
            image_url: "https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80",
            title: "UniLego",
            description: "Lego figurine dressed in a unicorn outfit",
            },

        ]
        return (
            <div>
             <HornedBeast title={HornedBeastArray[0].title}
              imageUrl={HornedBeastArray[0].imageUrl}
               description={HornedBeastArray[0].description}
               vote={0}
             />

             <HornedBeast title={HornedBeastArray[1].title}
              imageUrl={HornedBeastArray[1].imageUrl}
               description={HornedBeastArray[1].description}
               vote={0}
               />
            
            </div>

        )
    }
}

export default Main
