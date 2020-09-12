import React, { Component } from 'react'

export default class App extends Component {

  state = {
    list: [
      {id: 1, name: '张三'},
      {id: 2, name: '李四'},
      {id: 3, name: '王五'},
      {id: 4, name: '赵六'}
    ]
  }

  handleAdd = () => {
    this.setState({
      list: [{id: 5, name: '田七'}, ...this.state.list]
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            // key值: 提高dom渲染效率, 减少dom的操作
            this.state.list.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
        <button onClick={this.handleAdd}>add</button>
      </div>
    )
  }
}