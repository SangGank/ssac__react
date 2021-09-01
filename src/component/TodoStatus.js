function TodoStatus(){

    return(
        <section className ="section">
            <div className="status-section">
                <div className = "status-left">10개 남음</div>
                <div className="status-filter">
                    <button type ="button" className="btn-all">전체 목록</button>
                    <button type ="button" className="btn-left">남은 목록</button>
                    <button type ="button" className="btn-complete">완료 목록</button>
                </div>
                <div className="status-clear">
                    <button type ="button" className="btn-clear">완료 목록  삭제</button>
                </div>
            </div>
        </section>
        );

}
export default TodoStatus;