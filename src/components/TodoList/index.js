import React, { useState, useEffect } from 'react';
import './TodoList.css';
import ImportantStar from '../SelectingImportantTodoList/index';


const TodoList = ({ list, onChangeTodo, onCompleteButton, onDeleteButton}) => {
    const [updatedList, setUpdatedList] = useState(list);

    useEffect(() => {
        setUpdatedList(list);
    }, [list]);

    const handleDateChange = (index,event) => {
        const newUpdatedList = [...updatedList];
        newUpdatedList[index].deadline = new Date(event.target.value);
        setUpdatedList(newUpdatedList);
    };

    const handleStarClick = (index) => {
        const newUpdatedList = [...updatedList];
        const item = newUpdatedList.splice(index, 1)[0];
        item.isFavorite = !item.isFavorite;
        if(item.isFavorite) {
            newUpdatedList.unshift(item);
        } else {
            newUpdatedList.push(item);
        }
        setUpdatedList(newUpdatedList);
    };

    return (
        <ul>
            {updatedList.map((item, index) => (
                <li key={item.id} className={`${item.completed ? 'completed' : ''} 
                    ${item.deadline && new Date(item.deadline) < new Date() ? 'red-deadline' : ''}`}>
                    
                    <ImportantStar onStarClick={() => handleStarClick(index)} isFavorite={item.isFavorite}/>

                    <span className='back-span'>{(item.date.getDate()) + "." + (item.date.getMonth()+1)}</span>

                    <input className='input-todos'
                        onChange={(event) => onChangeTodo(index, event.target.value)} defaultValue={item.text}/>

                    <input  className='int-date' type='date' value={item.deadline ? item.deadline.toISOString().split('T')[0] : ''} 
                        onChange={(event) => handleDateChange(index, event)}/>

                    <button className='btn-completed' onClick={() => onCompleteButton(index)}>Completed</button>

                    <button className='btn-delete' onClick={() => onDeleteButton(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
