import React, {useState} from 'react';
import './TodoCreateForm.css';


const TodoCreateForm = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState('');
    const _onSubmit = (event) => {
        event.preventDefault();
        onSubmit(event);
        setInputValue('');
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form className='input-list' onSubmit={_onSubmit}>
            <div>
                <input placeholder='Напишите Вашу Задачу' className='input-todo-list' 
                    name='description' type='text' value={inputValue} onChange={handleInputChange} required/>
                <input name='input-date' className='int-date' type='date' min={new Date().toISOString().split('T')[0]} defaultValue={''} />
                <button className='btn-add' type='submit'>Add</button>
            </div>
        </form>
    );
};

export default TodoCreateForm;