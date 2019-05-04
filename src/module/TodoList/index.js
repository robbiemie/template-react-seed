import React ,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import './index.css'

class TodoList extends Component {
  constructor(){
    super()
    this.state = {
      target: '',
      list: []
    }
  }
  render() { 
    return ( 
      <Fragment>
        {/** 注释写的好恶心 */}
        <input 
          placeholder="please input words"
          className="search"
          value={this.state.target} // 绑定数据
          onChange={this.handleInput.bind(this)} // 绑定方法
        />
        <button onClick={this.handleSubmit.bind(this)}>submit</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              // 子组件传参
              return (<TodoItem key={index} infos={{...item,index}}/>)
            })
          }
        </ul>
      </Fragment>
     )
  }
  handleInput(e){
    // 修改state中的数据
    console.log('input',e.target.value)
    // debugger
    this.setState({
      target: e.target.value
    })
  }
  handleSubmit(e){
    // debugger
    this.setState({
      target: '',
      list: [...this.state.list,{value:this.state.target}]
    })
    console.log('submit',this.state.list)
  }
}
 
export default TodoList;