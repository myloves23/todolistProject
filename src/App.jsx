import React, { useState } from 'react';

const App = () => {
    const [inputName, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputName
        };

       setList([...list, newTask]);
        setInputTask('');
    };

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

   return (
        <div className="Todo">
            <h1>My To-Do List</h1>
            

            <div className="Top">
                Name:
                <input className="input" type="text" value={inputName}
                   onChange={handleInputChange} placeholder="FirstName" />

                <button className="btn" onClick={handleAddTodo}>Submit</button>
            </div>

           <ul>
                { list.map((todo) => (
                    <li className="Name" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                       </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;