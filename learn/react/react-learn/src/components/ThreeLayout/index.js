import React from 'react'
import "./index.css"
export default function index(props) {
    const defaultProps = {
        leftWidth:500,
        rightWidth:500,
        minWidth:800
    }
    const result = Object.assign({},defaultProps,props);
    return (
        <div className="three-layout" style={{
            minWidth:result.minWidth
        }}>
            <div className="main" >
                {result.children}
            </div>
            <div className="left" style={{
            width:result.leftWidth
        }}> {result.left}</div>
            <div className="right" style={{
             width:result.rightWidth
        }}>{result.right}</div>
        </div>
    )
}
