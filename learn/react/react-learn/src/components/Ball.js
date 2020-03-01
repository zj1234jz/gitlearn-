import React, { Component } from 'react'
import "./Ball.css"
export default class Ball extends Component {
    state = {
        left:this.props.left||0,
        top:this.props.top||0,
        xSpeed:this.props.xSpeed||100,
        ySpeed:this.props.ySpeed||100,
        bg:this.props.bg,
    }
    constructor(props){
        super(props);
        const duration = 16;
        const ballwidth = 50;
        setInterval(()=>{

            const disx = this.state.xSpeed * duration /1000;
            const disy = this.state.ySpeed * duration /1000;

            let newLeft = this.state.left + disx;
            let newTop = this.state.top +disy;

            if(newLeft <=0){
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }
            if(newLeft >=document.documentElement.clientWidth - ballwidth){
                newLeft = document.documentElement.clientWidth - ballwidth;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }

            if(newTop <=0){
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }
            if(newTop >=document.documentElement.clientHeight - ballwidth){
                newTop = document.documentElement.clientHeight - ballwidth;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }

            this.setState({
                left:newLeft,
                top:newTop,
            })

        },duration)

    }
    render() {
        return (
            <div className = "ball" style={{
                left:this.state.left,
                top:this.state.top,
                backgroundColor:this.state.bg
            }}>
                
            </div>
        )
    }
}
