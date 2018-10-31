// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 2.使用class关键字定义父组件
class A extends React.Component{
  constructor() {
    super()
    this.state={}
  }
  render() {
    return <div>1</div>
  }
}
// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  <A></A>
</div>, document.getElementById('app'))