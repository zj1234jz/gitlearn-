import React, { Component } from 'react'
import ImgContainer from "./ImgContainer"
import SwitchArrow from "./SwitchArrow"
import DotsSwitch from "./DotsSwitch"
import PropTypes from "prop-types"
import "./index.css"
export default class Banner extends Component {
    static defaultProps={
        imgWidth:520,
        imgHeight:280
    }
    static propTypes ={
        imgSrcs:PropTypes.arrayOf(PropTypes.string)
    }
    getRef = ref=>{
        this.ref = ref
    }
    state={
        imgSrcs:[this.props.imgSrcs[this.props.imgSrcs.length-1],...this.props.imgSrcs,this.props.imgSrcs[0]],
        currentIndex:0,
    }
    timer= null;
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.changeTo("right");
        },this.props.gapDuration)
    }
    
    changeTo=f=>{
        let cf;
        if(f === "left"){
            if(this.state.currentIndex === 0){
                cf = this.props.imgSrcs.length-1
            }else{
                cf = (this.state.currentIndex -1) % this.props.imgSrcs.length
            }
        }else{
            cf = (this.state.currentIndex +1) %this.props.imgSrcs.length
        }
        this.goto(cf);

    }
    goto=(cf)=>{
        this.setState({
            currentIndex:cf
        })
        this.ref.toPage(cf); 
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="banner-container" onMouseEnter={()=>{
                clearInterval(this.timer)   
            }}
            onMouseLeave={()=>{
                
                this.timer = setInterval(()=>{
                    this.changeTo("right");
                },this.props.gapDuration)
            }}>

                <ImgContainer ref ={this.getRef} {...this.props}  imgSrcs ={this.state.imgSrcs}/>
                <SwitchArrow onChange={this.changeTo}/>
                <DotsSwitch onPageChange={(index)=>{
                    this.goto(index);
                }}total={this.props.imgSrcs.length} current={this.state.currentIndex}/>
                <button onClick={()=>{
                    this.ref.toPage(2)
                }}>跳转到第二阶段</button>
            </div>
        )
    }
}
