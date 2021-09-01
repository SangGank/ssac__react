function TodoItem(){
    return(
        <li className="todo-item">
            <input type="checkbox" className="todo-item-check" />
            <mark className= "todo-item-text">할일 todo</mark>

            <button type = "button" className="todo-item-del">  
                <img src="add_button.svg" alt =""  className = "todo-item-img" />
            </button>

        </li>
    );

}
export default TodoItem;