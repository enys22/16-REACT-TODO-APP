// import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddBar from './componants/AddBar'
import React, { Component } from 'react'
import ListItem from './componants/listItem'

class App extends Component {
  constructor(){
    super()
    this.state={
        items : []
    }
  }

  deleteTask=(i)=>{
    this.setState((prevState)=>({
      items : prevState.items.filter((el,index)=>index!==i)
    })) 
  }
  
  completeTask=(i)=>{
    this.setState({
      items:this.state.items.map((el,index)=>
      index===i ? {...el,checked:!el.checked} :el)
    })
  }

  addTask = (newtitle) =>{
    if(newtitle){let newItem = {
      title : newtitle,
      checked : false
    }
    this.setState(prev=>({
        items : [...prev.items,newItem]
    }))}
  }

  render() {
    return (
      <div>
        <AddBar addTask={this.addTask}/>  
        < ListItem items={this.state.items} deleteTask={this.deleteTask} completeTask={this.completeTask}/>  
      </div>
    )
  }
}

export default App;