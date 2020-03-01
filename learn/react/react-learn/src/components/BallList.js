import React, { Component } from 'react'
import getRandom from "../utils/utils"
import Ball from "./Ball"
export default class BallList extends Component {
    state={
        ballInfos:[]
    }
    constructor(props){
        super(props);
        const timer = setInterval(()=>{
            const ballinfo = {
                left:getRandom(0,document.documentElement.clientWidth-50),
                top:getRandom(0,document.documentElement.clientHeight-50),
                bg:`rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`,
                xSpeed:getRandom(0,500),
                ySpeed:getRandom(0,500),
            }
            this.setState({
                ballInfos:[...this.state.ballInfos,ballinfo]
            })
            if(this.state.ballInfos.length==10){
                clearInterval(timer);
            }
        },1000);
    }
    render() {
        const balls = this.state.ballInfos.map((item,i)=><Ball key={i} {...item}/>);
        return (
            <>
                {balls}
            </>
        )
    }
}
