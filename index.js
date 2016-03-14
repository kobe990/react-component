import React from 'react'
import ReactDOM from 'react-dom'
import RockMenu from './react-rock-menu/RockMenu.js'
import PasswordInput from './react-password/react-password.js'

ReactDOM.render(<RockMenu topText="top" rightText="right" bottomText="bottom" leftText="left" rotateSpeed="10"></RockMenu>, document.getElementById('container'))
//ReactDOM.render(<PasswordInput src="receive.htm"></PasswordInput>, document.getElementById('container'))