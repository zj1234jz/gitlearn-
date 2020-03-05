import React from 'react'

export default function index(props) {

   
    return (
        <div>
            {getCheckboxGroup(props)}
        </div>
    )
}
function getCheckboxGroup(props){
    return props.datas.map(item=>(<p key={item.value}><input 
        type="checkbox" 
        value={item.value} 
        name={props.name} 
        checked={props.chooseDatas.includes(item.value)}
        onChange={e=>{
            handleChange(e,props);
        }}/>{item.text}</p>))
}
function handleChange(e,props){
    let newarr;
    if(e.target.checked){
        newarr = [...props.chooseDatas,e.target.value];
    }else{
        newarr =props.chooseDatas.filter(item=>item!==e.target.value)
    }
    props.onDataChange && props.onDataChange(newarr);
}