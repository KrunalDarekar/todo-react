const TodoList = ({toSetData, data}) => {
    const todoArr = data;
    const handleMarkClick = (id) => {
        const newTodoArr = [];
        todoArr.forEach(todo => {
            if(todo.id === id) {
                newTodoArr.push({...todo, isDone: true})
            } else {
                newTodoArr.push(todo)
            }
        });
        toSetData(newTodoArr);
    }
    const handleDoneClick = (id) => {
        const newTodoArr = [];
        todoArr.forEach(todo => {
            if(todo.id === id) {
                newTodoArr.push({...todo, isDone: false})
            } else {
                newTodoArr.push(todo)
            }
        });
        toSetData(newTodoArr);
    }

    return (
        <div className="todo-list">
            {todoArr.map( todo => {
                if(todo.isDone){
                    return <div key={todo.id}>
                    <b><p>{todo.task}</p></b>
                    <p>{todo.description}</p>
                    <button onClick={() => handleDoneClick(todo.id)}>done</button>
                </div>
                } else {
                    return <div key={todo.id}>
                    <b><p>{todo.task}</p></b>
                    <p>{todo.description}</p>
                    <button onClick={() => handleMarkClick(todo.id)}>mark as complete</button>
                </div>
                }
            })}
        </div>
    )
}

export default TodoList