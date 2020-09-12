import React from "react"

import "./assets/css/app.css"

export default class App extends React.Component {

  state = {
    currentIndex: 0
  }

  handleClick = (index) => {
    this.setState({
      currentIndex: index
    })
    setTimeout(() => {
      console.log(this.state.currentIndex === 0);
    }, 500);
  }

  render() {
    const {currentIndex} = this.state
    return (
      <div>
        <div className='box_container'>
          <div className='tabBar'>
            <input type="button" className={currentIndex === 0 ? "active" : ""} value="按钮1" 
            onClick={() => {this.handleClick(0)}}/>
            <input type="button" className={currentIndex === 1 ? "active" : ""} value="按钮2" 
            onClick={() => {this.handleClick(1)}}/>
            <input type="button" className={currentIndex === 2 ? "active" : ""} value="按钮3" 
            onClick={() => {this.handleClick(2)}}/>
          </div>
          <div className='content_box'>
            <div className={currentIndex === 0 ? "current" : ""}>内容1</div>
            <div className={currentIndex === 1 ? "current" : ""}>内容2</div>
            <div className={currentIndex === 2 ? "current" : ""}>内容3</div>
          </div>
        </div>
      </div>
    )
  }
}