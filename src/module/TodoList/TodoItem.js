import React,{Component} from 'react'
import PropTypes from 'prop-types'

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
// 类型校验
TodoItem.propTypes = {
  infos: PropTypes.object,
  delete: PropTypes.arrayOf(PropTypes.func,PropTypes.object)
}
// 默认属性
TodoItem.defaultProps = {
  infos: {
    index: -1,
    value: ''
  },
  delete: null
}
 
export default TodoItem;