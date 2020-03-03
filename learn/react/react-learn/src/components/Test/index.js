import React, { Component } from 'react'
import Pager from "../Pager"
import StudentList from "../StudentList"
import Model from "../Model"
export default class index extends Component {
    state={
        current:1,
        total:90,
        limit:10,
        panelNumber:5,
        stus:"",
        isLoading:false
    }
    constructor(props){
        super(props);
        this.getStudent();
    }
    async getStudent(page){
        page =page|| this.state.current;
        const url = `https://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${page}&size=${this.state.limit}`;
        const result = await fetch(url).then(res=>res.json()).then(res=>res.data);
        this.setState({
            isLoading:true
        })
        // await new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve();
        //     },800)
        // })
        // console.log(url)
        this.setState({
            total:result.cont,
            stus:result.findByPage,
            current:page,
            isLoading:false,
        })
        
    }
    render() {
        return (
            <div>
                {/* <Model isLoading={this.state.isLoading}/> */}
                <StudentList stus={this.state.stus}/>
                <Pager {...this.state} onPageChange={target=>{
                    this.getStudent(target);
                }}/>
            </div> 
        )
    }
}
