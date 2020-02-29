import React from 'react'
import Student from "./Student"
export default function StudentList(props) {
    const students = props.stus.map(item=>(<Student {...item}/>))
    return (
        <ul>
            {students}
        </ul>
    )
}
