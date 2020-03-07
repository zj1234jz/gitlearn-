import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"
export default class ImgContainer extends Component {

    static propTypes={
        imgSrcs:PropTypes.arrayOf(PropTypes.string),
        imgWidth:PropTypes.number,
        imgHeight:PropTypes.number,
        duration:PropTypes.number
    }

    contrainerRef = ref=>{
        this.container = ref;
    }
    tick = 16;
    timer = null;
    toPage(index){
        const target = -index * this.props.imgWidth;
        const current = parseFloat(getComputedStyle(this.container).marginLeft);
        if(target === current){
            return;
        }
        const times = Math.ceil(this.props.duration / this.tick);
        const dis = (target - current)/times;
        let time = 0;
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            time++;
            this.container.style.marginLeft = time*dis +current+"px"
            if(time === times){
                this.container.style.marginLeft = target+"px"
                clearInterval(this.timer);
            }
        },this.tick)
    }
    render() {
        const imgs = this.props.imgSrcs.map((item,index)=>(<img key={index} src={item} style={
            {width:this.props.imgWidth,height:this.props.imgHeight}
        }alt=""/>))
        return (
            <div ref = {this.contrainerRef} className="imgContainer" style={{
                width:this.props.imgWidth * this.props.imgSrcs.length,
                height:this.props.height,
                backgroundColor:"red"
            }}>
                {imgs}
            </div>
        )
    }
}
