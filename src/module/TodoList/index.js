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
        <button onClick={this.handleSubmit.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={index}>{item.value}</li>
            })
          }
        </ul>
      </Fragment>
     )
  }
  handleInput(e){
    // 修改state中的数据
    console.log('e',e.target.value)
    this.setState({
      target: e.target.value
    })
  }
  handleSubmit(e){
    console.log('e',e)
    const list = this.state.list
    list.push({
      value: this.state.target
    })
    this.setState({
      list
    })
  }
}
 
export default TodoList;