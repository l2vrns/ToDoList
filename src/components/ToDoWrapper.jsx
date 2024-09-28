import { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';
import { EditTodoForm } from './EditToDoForm';

uuidv4();

export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }])
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ?
            { ...todo, completed: !todo.completed } : todo))
    }

    const deleteItem = id => {
        setTodos(todos.filter(toDel => toDel.id !== id))
    }

    const editItem = id => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done !</h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <ToDo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />)))}
        </div>
    )
}
