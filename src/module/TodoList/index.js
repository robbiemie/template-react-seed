import React ,{Component,Fragment} from 'react'
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
        <input 
          value={this.state.target} // 绑定数据
          onChange={this.handleInput.bind(this)} // 绑定方法
        />
        <button onClick={this.handleSubmit.bind(this)}>submit</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item.value}</li>
            })
          }
        </ul>
      </Fragment>
     )
  }
  handleInput(e){
    // 修改state中的数据
    console.log('input',e.target.value)
    this.setState({
      target: e.target.value
    })
  }
  handleSubmit(e){
    this.setState({
      target: '',
      list: [...this.state.list,{value:this.state.target}]
    })
    console.log('submit',this.state.list)
  }
  handleDelete(index){
    console.log('index',index)
    // state 不允许直接被修改 
    // Immutable 
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
}
 
export default TodoList;