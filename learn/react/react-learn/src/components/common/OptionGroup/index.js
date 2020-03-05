import React from 'react'

export default function RadioGroup(props) {

   
    return (
        <select name={props.name} value={props.value}>
            {getCheckboxGroup(props)}
        </select>
    )
}
function getCheckboxGroup(props){
    return props.datas.map(item=>(<option 
        key={item.value}
        value={item.value} 
        name={props.name} 
        onChange={e=>{
            handleChange(e,props);
        }}>{item.text}</option>))
}
function handleChange(e,props){
    props.onDataChange && props.onDataChange(e.target.value);
}