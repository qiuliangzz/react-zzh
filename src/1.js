// 1.导入包
// 这两个接收成员名字必须这么写
import React from 'react'  // 专门用于创建组件和虚拟DOM的，同时组件的生命周期都在这个包中
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟DOM放到页面上展示

// 2.创建虚拟DOM元素  <h1 title="啊，五环" id="myh1">你比四环多一环</h1>
// const myh1 = React.createElement('h1', { title: '啊，五环', id: 'myh1' }, '你比四环多一环')
//  第一个参数： 字符串类型的参数，表示要创建的标签的名称
//  第二个参数：对象类型的参数， 表示 创建的元素的属性节点
//  第三个参数： 子节点
//  参数N:其他子节点

import '@/12.父组件'

// 3. 渲染虚拟DOM元素
// ReactDOM.render(myh1, document.getElementById('app'))
// ReactDOM.render(<div>
//   123
// </div>, document.getElementById('app'))


// 参数1： 表示要渲染的虚拟DOM对象
// 参数2： 指定页面上的DOM元素当作容器 , 注意：这里不能直接放容器元素的Id字符串，需要放一个容器的DOM对象

