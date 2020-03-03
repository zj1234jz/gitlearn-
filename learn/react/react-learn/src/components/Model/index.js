import React from 'react'
import "./index.css"
export default function index(props) {
    if(!props.isLoading){
        return null
    }
    return (
        <div className="model">
                <p>
                    正在加载中...
                </p>
        </div>
    )
}
