import React,{Component} from 'react'

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.bindMethods()
  }
  bindMethods(){
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() { 
    // 接收父组件参数
    const {value} = this.props.infos
    return ( 
      <li onClick={this.handleDelete}>{value}</li>
    )
  }
  handleDelete(){
    const {index} = this.props.infos
    // console.log('delete',index)
    // 子父组件传参
    this.props.delete(index)
  }
}
 
export default TodoItem;