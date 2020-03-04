import React from 'react'
import "./index.css"
export default function index(props) {
    const defaultProps = {
        bg:"rgba(0,0,0,.5)"
    }
    const result = Object.assign({},defaultProps,props);
    if(!result.show){
        return null;
    }
    return (
        <div onClick={
            e=>{
                if(e.target.className==="model"){
                    result.onClose();
                }
            }
        }className= "model" style={{
            background:result.bg,
        }}>
            <div className="model-center">
            {result.children}
            <button onClick={result.onClose}>关闭蒙层</button>
            </div>
           
        </div>
    )
}
