import React from 'react'

export default function RadioGroup(props) {

   
    return (
        <div>
            {getCheckboxGroup(props)}
        </div>
    )
}
function getCheckboxGroup(props){
    return props.datas.map(item=>(<p key={item.value}><input 
        type="radio" 
        value={item.value} 
        name={props.name} 
        checked={props.choose===item.value}
        onChange={e=>{
            handleChange(e,props);
        }}/>{item.text}</p>))
}
function handleChange(e,props){
    props.onDataChange && props.onDataChange(e.target.value);
}