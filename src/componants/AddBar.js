import React, { Component } from 'react'
import './AddBar.css'
import ListItem from './listItem'

class AddBar extends Component {
    constructor(){
        super()
        this.state={
            newItem : ''
        }
        
    }

    handleChange=(e)=>{
        this.setState({newItem:e.target.value})
    }

    sendTask=()=>{
        this.props.addTask(this.state.newItem)
        this.setState({newItem: ''})
    }

    render() {
        return (
            <div>
                <div className="container bg-primary text-white text-right">
                    <h1 className="font-weight-bold">To-Do App!</h1>
                    <p className="font-weight-bold">Add new To-Do</p>
                    <input type="text" placeholder="Enter new task" id="new-task" width="100%" className="d-block col-12 form-control" value={this.state.newItem} onChange={this.handleChange}/>
                    <button type="submit" id="add-btn" className=" btn btn-outline-light add-btn" onClick={this.sendTask}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddBar
