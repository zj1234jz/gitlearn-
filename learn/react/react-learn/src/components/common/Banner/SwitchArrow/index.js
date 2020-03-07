import React, { Component } from 'react'
import "./index.css"
export default class SwitchArrow extends Component {
    handleClick = du=>{
        this.props.onChange &&  this.props.onChange(du);
    }
    render() {
        return (
            <div className="arrow">
                <span className="left" onClick={()=>{
                    this.handleClick("left")
                }}>&lt;</span>
                <span className="right" onClick={()=>{
                    this.handleClick("right")
                }}>&gt;</span>
            </div>
        )
    }
}
