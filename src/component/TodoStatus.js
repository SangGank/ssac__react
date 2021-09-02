import todoList from '../css/todolist.module.css'
import status from '../css/status.module.css'

function TodoStatus(){

    return(
        <section className ={todoList.section}>
            <div className={status.section}>
                <div className = {status.left}>10개 남음</div>
                <div className="status-filter">
                    <button type ="button" className={status.btn}>전체 목록</button>
                    <button type ="button" className={status.btn}>남은 목록</button>
                    <button type ="button" className={status.btn}>완료 목록</button>
                </div>
                <div className="status-clear">
                    <button type ="button" className={status.btn}>완료 목록  삭제</button>
                </div>
            </div>
        </section>
        );

}
export default TodoStatus;