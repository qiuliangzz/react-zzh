// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入 Hello 组件
// 默认，如果不做单独的配置的话，不能省略 .jsx 后缀名
// import Hello from './components/Hello'

// 注意： 这里的 @ 符号，表示 项目根目录中的 src 这一层目录
import Hello from '@/components/Hello'

const dog = {
  name: '大黄',
  age: 3,
  gender: '雄'
}

// 3. 调用 render 函数渲染   jsx  XML 比 HTML 严格多了
ReactDOM.render(<div>
  123
  {/* 直接把 组件的名称，以标签形式，丢到页面上即可 */}
  {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
  <Hello {...dog}></Hello>

</div>, document.getElementById('app'))

/* import React from "react";
import ReactDOM from "react-dom";
import Hello from "@/components/Hello";

const user = {
  name: "慧慧",
  age: 18,
  gender: "女"
};

ReactDOM.render(
  <div>
    <Hello {...user}> </Hello>
  </div>,
  document.getElementById("app")
); */
