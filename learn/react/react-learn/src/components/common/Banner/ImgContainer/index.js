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
        let target;
        index = index +1 ;
        let current = parseFloat(getComputedStyle(this.container).marginLeft);
        let currentIndex = Math.abs(current/this.props.imgWidth);
        if(currentIndex === this.props.imgSrcs.length-2 && index===1){
            index = this.props.imgSrcs.length-1;
        }
        if(currentIndex === 1 && index===this.props.imgSrcs.length-2){
            index = 0;
        }
        console.log(currentIndex,index)
        target = -index * this.props.imgWidth;
        // if(index===0){
        //     target = -(this.props.imgSrcs.length-1) * this.props.imgWidth;
        // }else{
        //     target = -index * this.props.imgWidth;
        // }
      
        // let current = parseFloat(getComputedStyle(this.container).marginLeft);
       
        const times = Math.ceil(this.props.duration / this.tick);
        const dis = (target - current)/times;
        let time = 0;
        clearInterval(this.timer);
        this.timer = setInterval(()=>{
            time++;
            this.container.style.marginLeft = time*dis +current+"px";
           
            if(time === times){
               
                // if(index ===this.props.imgSrcs.length-2){
                //     console.log("切换第一个")
                //     this.container.style.marginLeft =-(this.props.imgSrcs.length-4)*this.props.imgWidth+"px";
                   
                // }
                this.container.style.marginLeft = target+"px";
                if(index === 0){
                    
                    this.container.style.marginLeft =-(this.props.imgSrcs.length-2)*this.props.imgWidth+"px"; 
                    
                }
                if(index === this.props.imgSrcs.length-1){
                    this.container.style.marginLeft =-this.props.imgWidth+"px";   
                }
                
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
