import React from 'react'
import "./index.css"
/**
 * current
 * limit
 * total
 * panelNumber
 */
export default function index(props) {
    const pageNumber = getPageNumber(props);
    const min = getMin(props);
    const max = getMax(props,pageNumber);
    const arr = [];
    for (let index = min; index <=max; index++) {
        arr.push(<span key= {index} className={props.current===index?"item active":"item"} onClick={()=>{toPage(index,props)}}>{index}</span>)  
    }
    return (
        <>
            <span className={ props.current === 1?"item disabled":"item"} onClick={()=>{toPage(1,props)}}>首页</span>
            <span className={ props.current === 1?"item disabled":"item"} onClick={()=>{toPage(props.current-1<1?1:props.current-1,props)}}>上一页</span>
            {/* 数字页码 */}
            {arr}
            <span className={ props.current === pageNumber?"item disabled":"item"} onClick={()=>{toPage(props.current+1>pageNumber?pageNumber:props.current+1,props)}} >下一页</span>
            <span className={ props.current === pageNumber?"item disabled":"item"} onClick={()=>{toPage(pageNumber,props)}}>尾页</span>
    <span className="current">{props.current}</span>
            /
            <span>{pageNumber}</span>
        </>
    )
}
function getMax(props,pageNumber){
    const min = getMin(props);
    let max = min + props.panelNumber-1;
    if(max > pageNumber){
        max = pageNumber
    }
    return max;
}
function getMin(props){
    let min = props.current - Math.floor(props.panelNumber/2);
    if(min<1){
        min = 1 ;
    }
    return min;
}
function toPage(target,props){
    if(target === props.current){
        return;
    }
    props.onPageChange && props.onPageChange(target);
}
function getPageNumber(props){
    return Math.ceil(props.total/props.limit)
}