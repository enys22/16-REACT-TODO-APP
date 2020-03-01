import React from 'react'
import './Item.css'

export default function Item(props) {
    return (
        <li className="task-item d-flex" id={"item-"+props.id} key={props.id}>
            <button className="btn btn-outline-secondary complete-btn" onClick={()=>props.completeTask("item-"+props.id)}>Complete</button>
            <button className="btn btn-outline-secondary delete-btn" onClick={()=>props.deleteTask("item-"+props.id)}>Delete</button>
            <span className="font-weight-bold text-secondary item-title">{props.title}</span>
        </li>
    )
}
