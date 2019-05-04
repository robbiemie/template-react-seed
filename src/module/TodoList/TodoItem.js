import React,{Component} from 'react'

class TodoItem extends Component {
  render() { 
    // 接收父组件参数
    const {index,value} = this.props.infos
    return ( 
      <li onClick={this.handleDelete.bind(this,index)}>{value}</li>
    )
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
 
export default TodoItem;