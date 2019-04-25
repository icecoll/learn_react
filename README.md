## 准备
- nodejs
- npm
- webpack
```
npm install
```

## 基本概念
#### Component
组件, 用react,可以将页面拆分成一个个的组件. 比如:
```js
<div>
  <Header />
  <MainContainer />
  <Footer />
</div>
```
react习惯将组件命名以大写开头,这样可以跟html标签区分开来.

#### JSX
JSX让你可以在javascript中写html标签,react会将其解析成javascript.
使用JSX,需要注意两点:
1. import React from 'react';
2. 使用ReactDOM.render时,传入的html必须是`<tag>...</tag>`这种格式,不能出现兄弟节点`<tag></tag><tag></tag>`,
如果需要, 就再套一层`<div><tag></tag><tag></tag></div>`

#### Props



## 基本用法
```
import React from 'react'
import ReactDom from 'react-dom'

ReactDOM.render(<h1>hello react</h1>, document.getElementById("root"))
```

