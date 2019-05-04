import React ,{Component,Fragment} from 'react'

class TodoList extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <button>提交</button>
      </Fragment>
     )
  }
}
 
export default TodoList;