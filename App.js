import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemInput: "",
      arreglo: []
    };
    this.addItem = this.addItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }
    changeItem = e => {
      e.preventDefault();
      this.setState({
        itemInput: e.target.value  
      });
    }

    addItem = (e) =>{
      e.preventDefault();
      const construArreglo = this.state.arreglo;
      construArreglo.push(this.state.itemInput);
      console.log(this.state.arreglo);
       this.setState({arreglo: construArreglo});
  }

    
    render() {
    
      const Mapeo = () => {
        return(this.state.arreglo.map(function(item, i){
             return <li key={i}>{item}</li>
           })
        );
       }
       

    return (
      <div>
        <form onSubmit={this.addItem}>
          <input onChange={this.changeItem} placeholder='Whats need to be done?'>  
          </input>
          <button>shualo</button>
        </form>
        <ul>
          < Mapeo/>
        </ul>
        
      </div>
    );
  }
}

export default TodoList;