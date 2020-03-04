import React, { Component } from 'react'

export default class index extends Component {
    state={
        loginId:"",
        loginPsw:"",
        sex:"male",
        loves:["足球","篮球","手机","西瓜","美女"],
        sLoves:[],
    }
    handleChange=e=>{
        const name = e.target.name;
        let value = e.target.value;
        if(name === "sLoves"){
            if(e.target.checked){
                value = [...this.state.sLoves,value]
            }else{
                value =this.state.sLoves.filter(item=>item!==value);
            }
        }
        this.setState({
            [name]:value
        })
    }
    getLoves(){
        const arr =  this.state.loves.map(item=>( <label  key={item}><input type="checkbox" name="sLoves" value={item}  checked={this.state.sLoves.includes(item)} onChange={this.handleChange}/>{item}</label>))
        return arr
    }
    render() {
        return (
            <div>
                <p>
                    <label >姓名：<input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange}/></label>
                </p>
                <p>
                    <label >密码：<input type="password" name="loginPsw" value={this.state.loginPsw} onChange={this.handleChange}/></label>
                </p>
                <p>
                    <label ><input type="radio" name="sex" value="male"  checked={this.state.sex==="male"} onChange={this.handleChange}/>男</label>
                    <label ><input type="radio" name="sex" value="female" checked={this.state.sex==="male"} onChange={this.handleChange}/>女</label>
                </p>
                <p>
                    {this.getLoves()}
                </p>
                <p>
                    <button onClick={()=>{
                        console.log(this.state)
                    }}>点击查看状态信息</button>
                </p>
            </div>
        )
    }
}
