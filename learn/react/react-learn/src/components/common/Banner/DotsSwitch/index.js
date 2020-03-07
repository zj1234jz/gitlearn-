import "./index.css"
import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class DotsSwitch extends Component {

    static propTypes = {
        total:PropTypes.number.isRequired,
        current:PropTypes.number.isRequired
    }
    render() {
        const spanArr = [];
        for (let index = 0; index < this.props.total; index++) {
            spanArr.push(<span key={index} onClick={()=>{
               
                this.props.onPageChange && this.props.onPageChange(index);
            }}   className={index===this.props.current?"active":""} />)
            
        }
        return (
            <div className="spanSwitch">
                {spanArr}
            </div>
        )
    }
}
