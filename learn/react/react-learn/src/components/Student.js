import React from 'react'
export default function Student(props){
    return <li>
        [姓名]：{props.name} 
        [住址]：{props.address} 
        [生日]：{props.birth} 
        [邮箱]：{props.email} 
    </li>
}