import './assets/index.stylus'
import avatar from './assets/avatar.jpg'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import '@babel/polyfill';


class App extends Component {
  render () {
    return <div>
      年轻
      <div className="box"></div>
      <img src={avatar} className="img" alt=""/>
    </div>
  }
}
let log = () => {
  console.log(123);
  let arr = [1,2,3];
  arr.map(item => console.log(item));
}
log();
ReactDom.render(
  <App/>,
  document.getElementById('root')
)