import React from 'react';
import './Task.css'
import {CgClose, CgInfo} from 'react-icons/cg'
import {useNavigate} from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    const history = useNavigate()

    const handleTaskDetailsClick = () => {
        history(`/${task.title}`)
    }

    return ( 
            <div 
                className='task-container' 
                style={task.completed ? {backgroundColor: 'rgb(10, 130, 245)'} : {}}
            >
                    
                <div 
                    className='task-title'
                    onClick={() => handleTaskClick(task.id)}>

                        {task.title}
                </div>

                <div className='buttons-container'>
                    <button 
                        onClick={() => handleTaskDelete(task.id)}
                        className='remove-task-button'
                        style={task.completed ? {backgroundColor: 'rgb(10, 130, 245)'} : {}}
                    >       
                        <CgClose />
                    </button>
                    <button 
                        onClick={handleTaskDetailsClick}
                        className='see-task-details-button'
                        style={task.completed ? {backgroundColor: 'rgb(10, 130, 245)'} : {}}
                    >       
                        <CgInfo />
                    </button>
                </div>
            </div>
    )
}
 
export default Task;