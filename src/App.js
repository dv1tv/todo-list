import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoCreateForm from './components/TodoCreateForm';
import MyAudioPlayer from './components/MyAudioPlayer';


//export default function App() {
//   const [isHello, setHello] = useState(true);
//   const x = () => {
//     setHello(!isHello);
//   } 
//   return (
//     <div className="App">
//       <ul onClick={x}>
//         <li>
//             {isHello ? 'Hello' : 'World'}
//         </li>
//       </ul>
//     </div>
//   );
//}

export default function App() {
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then((loadedTodos) => setTodos(loadedTodos.map((todo) =>({
  //       text: todo.title,
  //       date: new Date(),
  //       deadline: null
  //     }))));
  // },[]);

  

  const [todos, setTodos] = useState([]);
  const [lastId, setLastId] = useState(0);
  const onTodoCreate = (event) => {
    const dateDeadline = event.target.elements['input-date'].value;
    todos.push({ 
      text:event.target.elements['description'].value,
      date: new Date(),
      completed: false,
      id: lastId,
      // если dateDeadline не пустое то устанавливаем новую дату на основе dateDeadline,
      //а если пустое то значение null
      deadline: dateDeadline !== '' ? new Date(dateDeadline) : null,
    });
    setLastId(lastId + 1);
    setTodos([...todos]);
  }

  console.log(todos);

  const changeTodo = (index, text) => {
        todos[index].text = text
        setTodos([...todos]);
  }

  const completedButton = (index) => {
    todos[index].completed = !todos[index].completed;
    setTodos([...todos]);
  }

  const deleteButton = (index) => {
    todos.splice(index, 1);
    //создаем тот же массив, но без удаленного элемента
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
  }

  return (
    <div className='todo-list'>
      <header>Todo-List</header>
      <main>
        <TodoCreateForm onSubmit={onTodoCreate}/>
        <TodoList onChangeTodo={changeTodo} onCompleteButton={completedButton}
          onDeleteButton={deleteButton} list={todos}/>
        <MyAudioPlayer />
      </main>
      </div>
  );
};
