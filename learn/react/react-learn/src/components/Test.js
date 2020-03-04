import React, { Component } from 'react'
import Model from "./common/Model"
export default class Test extends Component {
    state= {
        show:false,
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        show:true
                    })
                }}>显示蒙层</button>
                <Model onClose={()=>{
                     this.setState({
                         show:false
                     })
                }}{...this.state}>
                    <h1>你好世界！！</h1>
                </Model>
            </div>
        )
    }
}
