import React from 'react'
import ReactDOM from "react-dom"
import src1 from "./asserts/1.jpeg"
import src2 from "./asserts/2.jpg"
import src3 from "./asserts/3.jpg"
import "./index.css"

const srcs = [src1,src2,src3];

let index = 0 ;
let timer = null;
const container = document.getElementById("root");

function render(){
    ReactDOM.render(<img src={srcs[index]} alt=""/>,container)
}

function start(){
    stop();
    timer = setInterval(()=>{
        index = (index +1)%3
        render()
    },1000)
}
function stop(){
    clearInterval(timer);
}

start();

container.onmouseenter= ()=>{
    stop();
}

container.onmouseleave =()=>{
    start();
}



