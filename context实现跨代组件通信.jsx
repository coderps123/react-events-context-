import React, { Component } from 'react'
import PropTypes from "prop-types"

class SubSub extends Component {
  // 后代组件需要声明自己需要使用 context
  static contextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func
  }

  changeColor = (newColor) => {
    this.context.callback(newColor)
  }

  render() {
    console.log(this.context);
    const style = {color: this.context.color}
    return (
      <div style={style} onClick={() => {this.changeColor('blue')}}>你好,我是后代组件的内容</div>
    )
  }
}

function Sub() {
  return (
    <SubSub/>
  )
}

export default class App extends Component {
  state = {
    color: 'red'
  }

  // 祖先组件需要先声明自己支持 context
  static childContextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func
  }

  // 祖先组件需要提供一个函数, 用来返回对应的 context对象
  getChildContext = () => {
    return {
      // color: "red",
      color: this.state.color,
      callback: this.callback
    }
  }

  callback = (msg) => {
    console.log(msg);
    // 更新
    this.setState({color: msg})
  }
  
  render() {
    return (
      <div>
        <Sub/>
      </div>
    )
  }
}
