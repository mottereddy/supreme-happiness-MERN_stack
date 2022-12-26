
import React, { useState, useEffect } from 'react';
import './AssignToDo.css';

function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [inprogress, setInprogress] = useState([]);
    const [reviewed, setReviewed] = useState([]);
    const [completed, setCompleted] = useState([]);
    const addTodo = () => {
        const todo = {
            text: input,
            id: Math.floor(Math.random() * 1000) //it will give a particular id to a particular value
        }
        setTodos([...todos, todo]);
    }
    const addToProgress = (id) => {
        const item = todos.find(x => x.id == id);
        setInprogress([...inprogress, item]);
        const filterarray = todos.filter(x => x.id != id);
        setTodos(filterarray);
    }

    const addbacktoToDO = (id) => {
        const item = inprogress.find(x => x.id === id);
        setTodos([...todos, item]);
        const filterarray = inprogress.filter(x => x.id !== id);
        setInprogress(filterarray);
    }

    const deleteTodo = (id) => {
        const filterarray = todos.filter(x => x.id != id);
        setTodos(filterarray);
    }
    const addToReviewed = (id) => {
        const item = inprogress.find(x => x.id === id);
        setReviewed([...reviewed, item]);
        const filterarray = inprogress.filter(x => x.id !== id);
        setInprogress(filterarray);
    }
    const addback = (id) => {
        const item = reviewed.find(x => x.id === id);
        setInprogress([...inprogress, item]);
        const filterarray = reviewed.filter(x => x.id !== id);
        setReviewed(filterarray);
    }
    const addtoCompleted = (id) => {
        const item = reviewed.find(x => x.id === id);
        setCompleted([...completed, item]);
        const filterarray = reviewed.filter(x => x.id !== id);
        setReviewed(filterarray);
    }
    const deleteData = (id) => {
        const item = completed.filter(x => x.id !== id)
        setCompleted(item)
    }

    return (
        <div className="App">
            <div className="container">
                <h3 className="title">ToDo List App</h3>
                <form className="form_todo">
                    <input type="text" className="form-control" onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Todo" name="text" />
                    <button type="button" className="btn" onClick={() => addTodo()}>Add</button>
                </form>
                <div className="todos_wrapper">
                    <div className="todos_list">
                        <h3 className="todo_title">Todos List</h3>
                        {todos.map((item, index) =>
                            <div className="todo_card" key={index}>
                                <p className="card_text">{item.text}</p>
                                <button onClick={() => addToProgress(item.id)} className="proceed-btn">Proceed</button>
                                <button onClick={() => deleteTodo(item.id)} className="delete-todo">delete</button>
                            </div>
                        )}
                    </div>
                    <div className="todos_list">
                        <h3 className="todo_title">InProgress</h3>
                        {inprogress.map((item, index) =>
                            <div className="progress_card" key={index}>
                                <p className="card_text">{item.text}</p>
                                <button onClick={() => addToReviewed(item.id)} className="progress-todo" placeholder='submit' >Proceed</button>
                                <button onClick={() => addbacktoToDO(item.id)} className="addBack-btn" placeholder='submit' >addBack</button>
                            </div>
                        )}
                    </div>
                    <div className="todos_list">
                        <h3 className="todo_title">Reviewed</h3>
                        {reviewed.map((item, index) =>
                            <div className="reviewd_card" key={index}>
                                <p className="card_text">{item.text}</p>
                                <button onClick={() => addtoCompleted(item.id)} className="proceed-btn">Proceed</button>
                                <button onClick={() => addback(item.id)} className="addBack-btn">addBack</button>
                            </div>
                        )}
                    </div>
                    <div className="todos_list">
                        <h3 className="todo_title">Completed</h3>
                        {completed.map((item, index) =>
                            <div className="completed_card" key={index}>
                                <p className="card_text">{item.text} </p>
                                <button className="addBack-btn" onClick={() => deleteData(item.id)}>&#x2716;</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default App;












