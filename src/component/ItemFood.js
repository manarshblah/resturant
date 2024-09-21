import React, { Component } from "react";
import Food from "./Food";
import Info from "./Info";

class ItemFood extends Component{
    constructor(){
        super()
        this.state = { info: Info }
    }
    mapping(x){
  const members =   x.map( member=> <Food
        img={member.img}
        name={member.name} 
        position={member.position}
        text={member.text}
        
        />

     )
    return members
}
    render(){
   
    return(
        <div className="row">
            {this.mapping(this.state.info)}
        </div>
    )
}
}
export default ItemFood;