import React, { Component } from "react";
import SalesModal from "../SalesModal";
class Food extends Component {
    render() {
        return (
            <>
                <div className="col-md-4 col-sm-6  food">
                    <div className="card">
                        <div className="card-header bg-dark">
                            <img src={this.props.img} className="img" />
                        </div>
                        <div className="card-body bg-dark" >

                            <h2>{this.props.name}</h2>
                            <h5>{this.props.position}</h5>
                                <SalesModal img={this.props.img} text={this.props.text}/>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Food;