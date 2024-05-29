import React from "react";
import TodoItem from "./TodoItem";

<<<<<<< HEAD
const TodoBoard = ({ todoList = [], deleteItem, toggleComplete }) => {
=======
const TodoBoard = ({ todoList, deleteTask, updateTask }) => {
>>>>>>> ecc2a8eaa653965a4f9e3b58837dbb4760f450a4
    return (
        <div>
            <h2>Todo List</h2>
            {todoList.length > 0 ? (
<<<<<<< HEAD
                todoList.map((item, index) => (
                    <TodoItem
                        item={item}
                        key={index}
                        deleteItem={deleteItem}
                        toggleComplete={toggleComplete}
                    />
                ))
            ) : (
                <p>No todos available</p>
=======
                todoList.map((item, idx) => (
                    <TodoItem
                        key={idx}
                        item={item}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))
            ) : (
                <h2>There is no Item to show</h2>
>>>>>>> ecc2a8eaa653965a4f9e3b58837dbb4760f450a4
            )}
        </div>
    );
};

export default TodoBoard;
