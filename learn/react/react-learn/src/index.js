import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from "./components/StudentList"
const url = "https://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249"
async function getAllStudents(){
    const stus  = await fetch(url).then(res=>{
        console.log(res);
        return res.json()
    }).then(res=>{
        console.log(res)
        return res.data
    });
    return stus;
}

async function render(){
    ReactDOM.render("正在加载中...", document.getElementById('root'));
    const stus = await getAllStudents();
    ReactDOM.render(<StudentList stus={stus}/>, document.getElementById('root'));
}
render();


