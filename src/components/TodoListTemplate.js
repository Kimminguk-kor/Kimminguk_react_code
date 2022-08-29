import "./TodoListTemplate.css"

const TodoListTemplate = ({sendForm, children}) => {
     // (props) => {props.sendForm}
     // ({sendForm, ***또다른 속성}) => {}
     return(
          <div>
               <div className="todoIntro">
                    <p>React로 간단한 TodoList 구현했습니다.</p>
               </div>
               <div className="todoWrap">
                    <h1>TODAY TODOS</h1>
                    <section className="formWrap">
                         {sendForm}
                    </section>
                    <section className="todoLists">{children}</section>
               </div>
               <div className="todoIntroBottom">
                    <p>add를 통해 할일을 목록에 추가합니다.</p>
                    <p>추가된 목록은 hover시 나타나는 x버튼을 눌러 삭제가 가능합니다.</p>
               </div>
          </div>
     )
}

export default TodoListTemplate;