import { useState } from "react";
import { v1 as uuid } from "uuid";

const TodoInput = ({toSetData, data}) => {
    const [taskValue, setTaskValue] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const newTask = taskValue;
        const newDescription = description;
        let isDone = false;
        const newData = [...data];
        newData.push({
            task: newTask,
            description: newDescription,
            isDone: isDone,
            id: uuid()
        })
        toSetData(newData)
    }

    return (
        <div className="todo-input">
            <input 
                type="text" 
                value={taskValue}
                onChange={ (e) => setTaskValue(e.target.value)}
            />
            <br />
            <input 
                type="text" 
                value={description}
                onChange={ (e) => setDescription(e.target.value)}
            />
            <br />
            <input 
                type="submit" 
                value="submit"
                onClick={handleSubmitClick}
            />
        </div>
    )
}

export default TodoInput;