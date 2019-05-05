import React ,{ Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import { Input, Button } from 'antd'
import './index.css'

class TodoList extends Component {
  constructor(){
    super()
    this.state = {
      target: '',
      list: []
    }
    this.bindMethods()
  }
  bindMethods(){
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() { 
    return ( 
      <Fragment>
        {/** 注释写的好恶心 */}
        <Input 
          placeholder="please input words"
          className="search"
          style={{width:'300px'}}
          value={this.state.target} // 绑定数据
          onChange={this.handleInput} // 绑定方法
        />
        <Button type="primary" style={{marginLeft:'4px'}} onClick={this.handleSubmit}>submit</Button>
        <ul>
          { this.getItem() }
        </ul>
      </Fragment>
     )
  }
  getItem(){
    return this.state.list.map((item,index)=>{
      // 子组件传参
      return (
        <TodoItem key={index} 
          infos={{...item,index}}
          delete={this.handleDelete}/>
      )
    })
  }
  handleInput(e){
    // 修改state中的数据
    console.log('input',e.target.value)
    // 异步set
    let val = e.target.value
    this.setState(_=>({
      target: val
    }))
  }
  handleSubmit(e){
    // 异步set
    this.setState(prevState=>({
      target: '',
      list: [...prevState.list,{value:prevState.target}]
    }))
    console.log('submit',this.state.list)
  }

  handleDelete(index){
    console.log('delete',index)
    // state 不允许直接被修改 
    // Immutable 
    this.setState(prevState=>{
      const list = [...prevState.list]
      list.splice(index,1)
      return {
        list
      }
    })
  }
}
 
export default TodoList;