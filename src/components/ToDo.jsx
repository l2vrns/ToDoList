import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({ task, toggleComplete, deleteItem, editItem}) => {
    return (
        <div className="Todo" >
            <p onClick={() => toggleComplete(task.id)} className={task.completed ? 'completed' : 'incompleted'}>{task.task}</p>
            <div>
                <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => editItem(task.id)}
                    icon={faPenToSquare}
                />
                <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteItem(task.id)}
                    icon={faTrash}
                />
            </div>
        </div>
    )
}
