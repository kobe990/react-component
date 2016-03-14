// 4位密码输入
var React = require('react')
var ReactDOM = require('react-dom')

var commonStyle = {
  textAlign: 'center'
}

var PasswordInput = React.createClass({
  getInitialState: function() {
    return {
      passwordStyle0: {},
      passwordStyle1: {},
      passwordStyle2: {},
      passwordStyle3: {}
    }
  },
  focus: function(obj, index){
    var passwordStyle = {}
    passwordStyle.border = '2px solid lightskyblue'
    obj['passwordStyle'+index] = passwordStyle
    this.setState(obj)
  },
  blur: function(obj, index){
    obj['passwordStyle'+index] = {}
    this.setState(obj)
  },
  componentDidMount: function() {
    var index = 0
    var passwordStyle = {}
    passwordStyle.border = '2px solid lightskyblue'
    var obj = {}
    this.focus(obj, index)
    var that = this;
    document.onkeydown = function(ev) {
      if(index !== 4 && ev.keyCode>47 && ev.keyCode<58 || ev.keyCode === 8){
        if(ev.keyCode === 8){
          that.blur(obj, index)
          index--
          if(index < 0 ){
            index = 0
          }
          ReactDOM.findDOMNode(that.refs['password'+index]).value = ''
          that.focus(obj, index)
          ev.preventDefault()
          return
        }
        ReactDOM.findDOMNode(that.refs['password'+index]).value = ev.keyCode-48
        that.blur(obj, index)
        index++
        if(index>4){
          index = 4
        }
        that.focus(obj, index)
        ev.preventDefault()
      }
    }
  },
  render: function() {
    return (
        <form method='get' action={this.props.src} onClick={this.change}>
          <input type='text' name='first' ref='password0' style={this.state.passwordStyle0, commonStyle} defaultValue='' readOnly='true' />
          <input type='text' name='second' ref='password1' style={this.state.passwordStyle1, commonStyle} defaultValue='' readOnly='true' />
          <input type='text' name='third' ref='password2' style={this.state.passwordStyle2, commonStyle} defaultValue='' readOnly='true' />
          <input type='text' name='forth' ref='password3' style={this.state.passwordStyle3, commonStyle} defaultValue='' readOnly='true' />
        </form>
    );
  }
})

module.exports = PasswordInput

