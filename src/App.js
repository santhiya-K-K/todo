import React,{Component} from 'react';

import './App.css';

class App extends Component {
  state={
    todolist:[]
  }
  render(){
  return (
  <div>
    <div className="jumbotron jumbotron-fluid py-2 bg-secondary text-white">
      <div className="container">
        <h1 className="display-4">WHATS TODAY??</h1>
      </div>
    </div>
    <form className="mb-3" onSubmit={this.handlesubmit}>
    <div className="input-group">
        <input type="text" name="todotask" className="form-control" placeholder="enter task" autoComplete="off"/> 
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-success bg-success text-white">ADD</button>
        </div>   
        </div>
        </form>
        <ul className="list-group">
            {
              this.state.todolist.map(
                (item,i)=>{
                  return <li className="list-group-item" key={i}>
                  {item}
                  <button className="btn btn-sm bg-danger outline-dark text-white float-right" onClick={(event)=>{this.deletetodo(event,i)}}>Delete</button>
                  </li>                }
              )
            }
        </ul>
        </div>
  );
}
handlesubmit=(event)=>{
  var task=event.target.elements.todotask.value;
  if(task.length>0){
    this.setState({
      todolist:[...this.state.todolist,task]        
      })
      event.target.reset();
  }
  event.preventDefault();
}
deletetodo=(event,i)=>{
  var taskarray=[...this.state.todolist]
  taskarray.splice(i,1)
  this.setState({todolist:taskarray})
}
}



export default App;
