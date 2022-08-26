import { Component } from "react";
import Form from "./Form";
import TodoItemList from "./TodoItemList";
import TodoListTemplate from "./TodoListTemplate";

class Todo extends Component {
  //1.
  //목록 개수를 체크할 변수 만들기
  id=3;
  state = {
    input:"",
    todos:[
      {id:0, text:"리액트 복습하기", checked:false},
      {id:1, text:"이력서 쓰기", checked:false},
      {id:2, text:"운동하기", checked:false}
    ]
  }
  //2.
  //input의 내용을 value로 넣는 함수
  handleChange = (e) => {
    this.setState({
      input:e.target.value
    })
  }
  //입력한 데이터를 todos배열에 넣는 함수
  handleCreate = (e) => {
    const {input, todos} = this.state;
    this.setState({
      input:"", // 넣어야 클릭했을때 input내용이 지워진다.
      todos:todos.concat({
        id:this.id++,
        text:input,
        checked:false
      })
    })
  }
  handleRemove = (id) => { //id와 같이 넘어옴
    const {todos} = this.state;
    this.setState({
      todos:todos.filter(todo => todo.id !== id) // 앞에는 기존 id
    })
  }
  handleToggle = (id) => {
    const {todos} = this.state;
    // 클릭한 요소의 순서 위치값 찾기
    const index = todos.findIndex(todo => todo.id === id);
    // console.log(index)
    const selected = todos[index];

    //배열 복사하기 spread 연산자
    const copyTodos = [...todos];
    // console.log(copyTodos);
    copyTodos[index] = {
      ...selected,
      checked:!selected.checked
    }
    // console.log(copyTodos)
    this.setState({
      todos:copyTodos
    })
  }
  //3.붙일내용
  render() {
    const {input, todos} = this.state;
    return (
      <div className="innerBox">
        <div className="container">
          <TodoListTemplate sendForm = {<Form value={input} 
            onaChange={this.handleChange} onaCreate={this.handleCreate}/>}>
            <TodoItemList todos={todos}
            onbRemove={this.handleRemove} onbToggle={this.handleToggle}/>
          </TodoListTemplate>
        </div>
      </div>
    );
  }
}

export default Todo;
