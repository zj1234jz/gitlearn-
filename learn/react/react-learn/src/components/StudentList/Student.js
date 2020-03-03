import React from 'react'

export default function Student(props) {
    return (
        <li>
            [ID]{props.id}
            [姓名]{props.name}
            [性别]{props.sex==="1"?"男":"女"}
            [生日]{props.birth}
        </li>
    )
}
