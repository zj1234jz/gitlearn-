import React from 'react'
import Student from "./Student"
export default function index(props) {

    if(!props.stus){
        return null
    }
    const studentList = props.stus.map(item=><Student key={item.id} {...item}/>)
    return (
        <ul>
            {studentList}
        </ul>
    )
}
