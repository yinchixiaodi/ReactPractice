# React

### React基础

1. 引入文件

   引入React，向外暴露一个函数React

   引入React-DOM，向外暴露一个函数ReactDOM

   引入babel，只引入babel不能生效，还要在下面的script标签配置`<script type="text/babel"></script>`

2. 将虚拟DOM对象渲染到页面指定容器中:

   `ReactDOM.render(xxx,document.getElementById("容器id值"))`

3. 组件内部返回要渲染的虚拟DOM对象  -> 通过render方法返回

   ```jsx
   // ES6类组件
   class ClassComp extends Component {
     render() {
       console.log("ES6类组件", this); // this指向ES6类组件实例对象
       return <h1>ES6类组件</h1>;
     }
   }
   // 工厂函数
   function FuncComp() {
     console.log("工厂函数", this); //undefined
     // 组件内部返回要渲染的虚拟DOM对象
     return <div>FuncComp...</div>; // React.createElement()
   }
   /*
   工厂函数组件和ES6类组件的区别
   1. this不一样
   	工厂函数没有this
   	ES6类组件函数中有this
   2. 功能不一样
   	工厂函数没有this，有些功能默认实现不了，ES6类组件有this，所以可以实现
   */
   /*
   在React类组件中，this指向
   	1. 如果是生命周期函数中，this指向组件实例对象。 constructor（类的构造方法） / render中this指向组件实例对象
   	2. 如果在其他自定义函数中，this默认指向undefined（严格模式下）
   		如果需要将其他自定义函数的this指向组件实例对象要用箭头函数
   */
   ```

4. 定义组件的注意事项

   * 组件名首字母必须大写

     JSX一旦标签首字母小写就会当做html元素解析 例：`<myComponent />`

     因为HTML中没有myComponent这个元素，所以会报错

     首字母大写，就会当做组件解析，内部会判断是工厂函数还是ES6类组件

   * 内部返回虚拟DOM对象元素必须有结束符

     单标签自结束标签/双标签

   * 内部返回多个虚拟DOM对象，必须有且有一个根标签

#### ES6类组件实例对象三大属性

1. state

   作用：用来更新用户界面

   使用：

    1. 初始化状态

       ```jsx
       constructor(){
           super();
           this.state = {xxx}
       }
       // 简写 简写的话需要webpack添加babel插件
       state = {
           xxx
       }
       ```

       

    2. 读取状态

       ```jsx
       this.state.xxx
       ```

       

    3. 更新状态

       ```jsx
       // 用来更新用户界面的方法
       this.setState({xxx})
       ```

       

2. props

   将父组件的数据传递给子组件，使用组件间通信props

   父组件 -> 子组件：使用普通属性

   子组件 -> 父组件：使用函数属性

   ```jsx
   // 父组件
   <Child name={xxx} age={xxx}/>
   // 子组件
   import PropTypes from "prop-types"; // 用来对props类型检查的库
   // 对传入的props进行类型/必要性检查
   static propTypes = { 
       name: PropTypes.string.isRequired, // 必要
       age: PropTypes.number //可选
   }
   // 给props设置默认值
   static defaultProps = {
       age : 18,
   }
   ```

   

3. refs

   给实例对象添加属性

   `xxx = React.createRef();`

   挂载了ref之后，获取挂载ref的DOM元素的内容

   获取input输入框中的值`this.xxx.current.value`

   如果触发事件元素和要收集数据的元素是同一个元素就用 event.target

#### 受控组件和高阶函数

==受控组件==：通过state和onChange事件来自动收集表单数据  

禁止表单的默认行为：`event.preventDefault()`

在React绑定事件 ：要采用小驼峰命名法 例：onClick、onChange、onMouceMove

在React中，事件都是合成事件，不是原声DOM事件-----合成事件：做了兼容性处理

==函数柯里化==  闭包的典型应用

普通函数：`function fn(a,b){return a + b}`

经过函数柯里化处理的函数

```jsx
function fn(a){
    reutrn function(b){
        return a + b;
    }
}
```

#### 生命周期函数

三个流程

1. 初始化

   ```jsx
   constructor
   componentWillMount  // 组件即将挂载
   render
   componentDidMount   // 组件已经挂载
   // 在2、3之间页面完成渲染
   ```

2. 更新

   ```jsx
   更新有三种方式触发
   1. 父组件 this.setState 导致子组件重新渲染，子组件会触发：
   	componentWillReceiveProps  // 组件将要接收属性
       shouldComponentUpdate
       componentWillUpdate
       render
       componentDidUpdate
   2. 父组件this.setState,父组件触发：
   	shouldComponentUpdate
    componentWillUpdate
       render
       componentDidUpdate
   3. 父组件this.forceUpdate，父组件触发：
   	componentWillUpdate
       render
       componentDidUpdate
   ```
   
3. 卸载

   `componentWillUnmount`

重要的声明周期函数

* `componentDidMount`:发送请求，设置定时器，绑定事件等一次性任务

* `shouldComponentUpdate`:性能优化，返回值 true 要更新，返回值 false 不更新

* `componentWillUnmount`:取消请求，清除定时器，绑定事件等收尾工作

  

新的声明周期函数扩展

* `static getDerivedStateFromProps`和`getSnapshotBeforeUpdate`

将root节点上挂载的组件卸载掉

​	`ReactDOM.unmountComponentAtNode(document.getElementById("root"))`

​	卸载组件React会把组件相关的东西卸载，React合成事件可以卸载，但是定时器，ajax请求，原生DOM事件，React不会清楚，需要开发者手动清除。

#### 消息订阅和发布

引入：`import PubSub from 'pubsub-js'`

发布消息：`PubSub.publish("RECEIVE_DATA", data);`

订阅消息：`PubSub.subscribe("RECEIVE_DATA",(msg,data) => {})`

#### Fragment

`<Fragment></Fragment>`可以充当组件里面要返回的根标签，可以简写为`<></>`

#### context

适用于祖孙组件通信

1. 创建context.js文件

   `React.createContext(defaultValue)`defaultValue只有在没有定义Provider组件时，才能生效

2. 上层组件使用Provider组件来向后代组件提供数据

   `<Provider value={data}>子组件</provider>`

3. 后代组件接受上层组件提供的数据

   * 方案一：适用于接收到数据直接渲染

     `<Consumer>{(data) => {使用return要渲染的虚拟DOM对象}}</Consumer>`

   * 方案二：适用于接收到数据后进行其他操作

     `static contextType = context`

#### 性能优化

`Component`普通类组件

`PureComponent`纯类组件：内部实现了shouldComponentUpdate,对state和props进行浅比较（只比较对象数据的第一层属性）

不纯函数：内部使用了`Math.random()/Date.now()`,值是随机的，是不可控的。

纯函数：输入一致，输出也一致

在`shouldComponentUpdate`和`PureComponent`同时存在时，只有`shouldComponentUpdate`会生效，因为`shouldComponentUpdate`的优先级更高

```jsx
shouldComponentUpdate(nextProps, nextState)
    组件要不要更新（此时还没有更新，所以this.state/this.props还是上一次的值）
    nextProps, nextState 就是组件接受最新的值   
最终：
    要判断 this.state 和 nextState 里面的数据是否一致
    还要判断 this.props 和 nextProps 里面的数据是否一致
判断的时候先看state里面有没有nextState的属性，再看属性值是否一样，如果有一个不满足，说明页面要更新，
return true;
```

#### forwardRef

`React.forwardRef()`将工厂函数组件内部的元素提供给父组件访问

#### modal

`ReactDOM.createPortal(要渲染的元素，渲染到哪个容器)`将某个组件(某些元素)渲染到根节点以外

1. `constructor`创建DOM元素

   `this.div = document.createElement('div')`挂载到this上，方便在组件任意地方访问

2. `render ReactDOM.createPortal(要渲染的元素,this.div)`将要渲染的元素渲染到div内

3. ```jsx
   // 将div插入到body中生效，此时就能看到modal了
   componentDidMount(){
       document.body.appendChild(this.div)
   }
   ```

4. 防止组件卸载/重新创建过程中创建多个div，所以在卸载组件之前，将div移除

   ```jsx
   componentWillUnmount(){
       this.div.remove()
   }
   ```

#### HOC

高阶组件：HOC

​	概念：本质上是一个函数，执行函数接收一个组件作为参数，返回值是一个新组件

​	作用：复用组件代码

#### render props

​		复用代码，本质上是一个组件，将B组件渲染到A组件内部，同时A组件传递必要的props（一般是属性数据，不是方法）

#### hooks

​	工厂函数如果想要获取三个属性(state,props,refs)

​		`state --> React.useState()`

​		`props --> 通过函数参数获取`

​		`refs --> React.forwardRef()`

```jsx
// 让工厂函数组件拥有状态数据state
const [状态数据（初始化为defaultValue），更新状态数据的方法] = React.useState(defaultValue)
// 让工厂函数组件拥有生命周期函数(componentDidMount componentDidUpdate componentWillUnmount)
React.useEffect(() => {
    // 相当于 componentDidMount componentDidUpdate
    // 如果只想有 componentDidMount 功能，需要传递第二个参数 []
    // 如果想具有 componentWillUnmount 功能 ，需要加一个返回值，返回值是函数
})
```

#### 前端路由

`History模式`

​	在刷新页面的时候，会把所有地址带上发请求，所以会导致刷新浏览器出现404问题

​	解决办法： 出现404，就直接返回 index.html

​		开发中：`webpack配置 devServer historyApiFallback:true`

​		项目上线用：`nginx`

`Switch切换`能保证route只有一个生效，只有一个会加载，默认情况下：从上到下一次匹配。

`Route`负责根据浏览器历史记录的变化，一旦匹配上，就会加载当前组件，如果之前加载过，没有匹配上，就会卸载，如果之前没有加载过，就不加载。

`Redirect`组件会匹配所有地址，一旦匹配上就会自动更新浏览器历史记录。

##### 路由传参

```jsx
// 路由式导航
<Link to="/xxx">content</Link>
// 编程式导航 传第二个参数只有history模式才有效果
this.props.history.push("/xxx")
```

通过Route加载的组件，叫做路由组件

路由组件有三大属性：

1. `location`

   pathname:当前路由地址

   state 

2. `history`

   `push/replace/goBack/goForward/listen`等方法，用来操作浏览历史记录

3. `match`

   `params 参数`

forEach中遍历产生一级路由和二级路由，如果先添加一级路由，就不能正常显示二级路由内容

==原因是==：Switch组件会让多个路由只生效一个，所以一级路由在前面，就会先匹配一级路由

如果一级路由和耳机路由分别是：

```jsx
<Route path="/home" component={Home} />
<Route path="/home/xxx" component={Xxx} />
// 这个路由默认匹配路径是以/home开头的路径都能匹配
解决办法1：
	遍历的时候先遍历二级路由再遍历一级路由
解决办法2：
	在Route标签中再添加一个属性：exact //严格匹配
```

```jsx
<A><B /><C /></A>
通过this.props.children获取组件标签中所有内容
React.createElement(type(元素类型/组件),props(元素/组件接收的属性),children)
```

```jsx
Link 
	不能刷新，不能发送请求，不能跳转网址 绑定onClick事件，禁止默认行为
    只能更新浏览历史记录 -> history.push()
举例：
	<Link to="/home">首页</Link>
	this.props.to -> 对应： /home
	this.props.children -> 对应： 首页
```

