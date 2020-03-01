import React, { Component } from 'react'
import './AddBar.css'
import Item from './Item'

class AddBar extends Component {
    constructor(){
        super()
        this.state={
            items : []
        }
        
    }
    addTask = () =>{
        console.log("addTask")
        var newId = document.querySelectorAll(`.task-item`).length;
        var newText = document.querySelector(`#new-task`).value;
        var newItem = (<Item title={newText} id={newId} completeTask={this.completeTask} deleteTask={this.deleteTask}  />)
        this.setState(prev=>({
            items : [...prev.items,newItem]
        }))
        document.querySelector(`#new-task`).value = "";
    }

    completeTask=(id)=>{
        console.log("completeTask"+id)
        if (document.querySelector(`#${id} .complete-btn`)){
            if (document.querySelector(`#${id} .complete-btn`).innerHTML === "Complete"){
                document.querySelector(`#${id} .complete-btn`).innerHTML = "Undo";
                document.querySelector(`#${id} .item-title`).style.textDecoration  = "line-through";
            }
            else {
                document.querySelector(`#${id} .complete-btn`).innerHTML = "Complete";
                document.querySelector(`#${id} .item-title`).style.textDecoration  = "none";
            }
        }
    }
    deleteTask=(id)=>{
    
        console.log("deleteTask")
        var item = document.querySelector(`#${id}`);
        item.parentNode.removeChild(item);  
    }



    render() {
        return (
            <div>
                <div className="container bg-primary text-white text-right">
                    <h1 className="font-weight-bold">To-Do App!</h1>
                    <p className="font-weight-bold">Add new To-Do</p>
                    <input type="text" placeholder="Enter new task" id="new-task" width="100%" className="d-block col-12 form-control"/>
                    <button type="submit" id="add-btn" className=" btn btn-outline-light add-btn" onClick={this.addTask}>Add</button>
                </div>
                
                <div className="tasks-container container">
                    <h3 className="task-title text-secondary text-center">Let's get some work done</h3>
                    <hr className="w-50"/>
                    <div className="row">
                        <ul className="tasks-list col-6" id="item-list">
                            {this.state.items}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBar
