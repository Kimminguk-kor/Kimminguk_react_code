import "./TodoListTemplate.css"

const TodoListTemplate = ({sendForm, children}) => {
     // (props) => {props.sendForm}
     // ({sendForm, ***또다른 속성}) => {}
     return(
          <div className="todoWrap">
               <h1>TODAY TODOS</h1>
               <section className="formWrap">
                    {sendForm}
               </section>
               <section className="todoLists">{children}</section>
          </div>
     )
}

export default TodoListTemplate;