import React, { Component } from "react";
import Bus from "./eventBus.js"

class Foo extends Component {

  handleClick = () => {
    // 点击按钮发射一个事件
    Bus.emit("changeColor", "red")
  }
  
  render() {
    return (
      <div onClick={this.handleClick}>foo组件</div>
    )
  }
}

class Bar extends Component {
  state = {
    color: "blue"
  }

  componentDidMount() {
    // 在dom挂载完毕后接受事件
    Bus.on("changeColor", (color) => {
      this.setState({color})
    })
  }

  // 在dom销毁前销毁事件
  componentWillUnmount() {
    Bus.off("changeColor")
  }
    
  render() {
    return (
      <div style={{color: this.state.color}}>bar组件</div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Foo></Foo>
        <Bar></Bar>
      </div>
    )
  }
}
