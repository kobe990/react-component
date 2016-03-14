import React from 'react'
import ReactDOM from 'react-dom'
import RockMenuStyle from './RockMenu.css'

class Center extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className = "menu-center" onMouseEnter = {this.props.mouseEnter} onMouseLeave = {this.props.mouseLeave}></div>
    )
  }
}

class Sub extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className={"menu-sub " + this.props.position}><span>{this.props.text}</span></div>
    )
  }
}

class RockMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.count = 0
    this.animation = null
    this.antianimation = null
    this.speed = this.props.rotateSpeed
  }

  clockRotate() {
    this.antianimation && window.cancelAnimationFrame(this.antianimation)
    this.count += parseInt(this.speed)
    if(this.count > 360) {
      return
    }
    this.refs.menuContainer.style.transform = "rotate(" + this.count + "deg)"
    this.animation = requestAnimationFrame(this.clockRotate.bind(this))
  }

  anticlockRotate() {
    this.animation && window.cancelAnimationFrame(this.animation)
    this.count -= parseInt(this.speed)
    if(this.count < 0) {
      return
    }
    this.refs.menuContainer.style.transform = "rotate(" + this.count + "deg)"
    this.antianimation = requestAnimationFrame(this.anticlockRotate.bind(this))
  }

  onMouseEnter() {
    // this.refs.menuContainer.className = 'menu-container menu-move-clock'
    this.clockRotate()
  }

  onMouseLeave() {
    // this.refs.menuContainer.className = 'menu-container menu-move-anticlock'
    this.anticlockRotate()
  }

  render() {
    return(
      <div className = "menu-container" ref="menuContainer">
        <Sub position = "top" text = {this.props.topText}></Sub>
        <Sub position = "right" text = {this.props.rightText}></Sub>
        <Sub position = "bottom" text = {this.props.bottomText}></Sub>
        <Sub position = "left" text = {this.props.leftText}></Sub>
        <Center mouseEnter = {this.onMouseEnter.bind(this)} mouseLeave = {this.onMouseLeave.bind(this)}></Center>
      </div>
    )
  }
}

module.exports = RockMenu
