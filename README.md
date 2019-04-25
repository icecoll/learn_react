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
react习惯将组件命名以大写开头,使用驼峰命名,这样可以跟html标签区分开来.

#### JSX
JSX让你可以在javascript中写html标签,react会将其解析成javascript.
使用JSX,需要注意两点:
1. import React from 'react';
2. 使用ReactDOM.render时,传入的html必须是`<tag>...</tag>`这种格式,不能出现兄弟节点`<tag></tag><tag></tag>`,
如果需要, 就再套一层`<div><tag></tag><tag></tag></div>`
3. 在html标签中用{}使用javascript变量
```
const title = 'foo'
<h1>{title}</h1>
```

#### Props
`props`用来传递参数给组件. react Component默认接收`props`作为参数;
在组件上通过`<Example xxx='foo' />`的方式定义参数，在组件中通过`this.props.xxx(参数名称)`获取参数值.
```

<Props content="value of props.content" />

class Props extends Component {
  render() {
    return(
    <div>
      <h1>css example</h1>
      <p>{this.props.content}</p>
    </div>
    )
  }
}
```




## 基本用法
```
import React from 'react'
import ReactDom from 'react-dom'

ReactDOM.render(<h1>hello react</h1>, document.getElementById("root"))
```

#### inline-style css
可以使用style标签给标签设置样式,需要注意的是:
1. style接收的值是javascript map对象,例如:
```jsx
<h1 style={{color: 'red'}}> foo </h1>

或者
const styles = {color: "red"}
<h1 style={styles}> foo </h1>
```
2. 对于使用中划线的属性,JSX中使用驼峰替换中划线
```jsx
const styles = {fontSize: '40px', color: 'green'}
<p style={styles}>hello</p>
```
