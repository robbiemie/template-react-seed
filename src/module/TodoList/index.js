import React ,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import store from './../../store'
import actionCreators from './../../store/actionCreators'
import './index.css'

class TodoList extends Component {
  constructor(){
    super()
    this.bindMethods()
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
    // console.log('data',store.getState())
  }
  bindMethods(){
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
  }
  render() { 
    return ( 
      <Fragment>
        {/** 注释写的好恶心 */}
        <input 
          placeholder="please input words"
          className="search"
          value={this.state.target} // 绑定数据
          onChange={this.handleInputChange} // 绑定方法
        />
        <button onClick={this.handleSubmit}>submit</button>
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
  handleStoreChange(data){
    this.setState(store.getState())
  }
  handleInputChange(e){
    const action = actionCreators.getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleSubmit(e){
    // 异步set
    const action = actionCreators.getSubmitInputAction()
    store.dispatch(action)
  }

  handleDelete(index){
    console.log('delete',index)
    // state 不允许直接被修改 
    const action = actionCreators.getDeleteItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;