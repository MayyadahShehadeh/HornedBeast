import React, { Component } from 'react'


 class HornedBeast extends Component {
     constructor(props){
         super(props )
     this.state={
        vote:props.vote
     }
plusVote=()=>{
this.setState({vote:this.state.vote+1})
}

     }
    render() {
        console.log(this.state )
        return (
            <div>
           <h2>{this.props.title}</h2>
           <img src= {this.props.imageUrl} alt={this.props.title}/>
         <p>{this.props.description}</p>
         <Button onClick={this.plusVote} >Vote</Button>
         {/* ❤ = {this.state.vote} */}

            </div>
        )
    }
}

export default HornedBeast
