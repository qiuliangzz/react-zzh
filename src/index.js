//入口函数
// 导入包
import React from "react";
import ReactDOM from "react-dom";

// 导入组件
import BindEvent from "@/components/BindEvent";

// 调用 render 函数渲染
ReactDOM.render(
  <div>
    <BindEvent />
  </div>,
  document.getElementById("app")
);
