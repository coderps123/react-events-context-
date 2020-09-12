import React, { Component } from 'react'

class ChildCom extends Component {

  state = {
    num: 10
  }

  UNSAFE_componentWillMount() {
    console.log('1.1 componentWillMount');
  }

  componentDidMount() {
    console.log('1.3 componentDidMount');
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log('3.1 UNSAFE_componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('2.1 3.2 shouldComponentUpdate可以判断修改前后的值是否一样, 不一样的才去执行render() 渲染dom, 优化更新性能');
    console.log(nextProps, nextState.num);
    // return ( nextState.num !== this.state.num )
    return (nextProps.msg !== this.props.msg || nextState.num !== this.state.num)
  }

  UNSAFE_componentWillUpdate() {
    console.log('2.2 3.3 componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('2.4 3.5 componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  
  handleClick = () => {
    this.setState({num: 12})
  }

  handleParentState = () => {
    this.props.changeState("你好, vue")
  }
  
  render() {
    console.log('1.2 2.3 3.4 render');
    return (
      <div onClick={this.handleClick}>
        {this.state.num}
        <br/>
        {this.props.msg}
        <button onClick={this.handleParentState}>改变父组件状态</button>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    msg: "你好react, 请多多关照!"
  }

  changeState = (msg) => {
    this.setState({msg})
  }

  render() {
    return (
      <div>
        <ChildCom msg={this.state.msg} changeState={this.changeState}></ChildCom>
      </div>
    )
  }
}