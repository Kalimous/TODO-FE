import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./utils/api";
import { useEffect, useState } from "react";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const getTasks = async () => {
        const response = await api.get("/tasks");
        console.log("rrrr", response.data.data);
        setTodoList(response.data.data);
    };

    const addTask = async () => {
        try {
            const response = await api.post("/tasks", {
                task: todoValue,
                isComplete: false,
            });
            if (response.status === 200) {
                getTasks();
                setTodoValue("");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTask = async (id) => {
        try {
            const response = await api.delete(`tasks/${id}`);
            console.log(response);
            getTasks();
        } catch (err) {
            console.log(err);
        }
    };

    const updateTask = async (id, task, isComplete) => {
        try {
            const response = await api.put(`tasks/${id}`, {
                task: task,
                isComplete: !isComplete,
            });
            getTasks();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <Container>
            <Row className="add-item-row">
                <Col xs={12} sm={10}>
                    <input
                        type="text"
                        placeholder="할일을 입력하세요"
                        className="input-box"
                        value={todoValue}
                        onChange={(evt) => {
                            setTodoValue(evt.target.value);
                        }}
                    />
                </Col>
                <Col xs={12} sm={2}>
                    <button className="button-add" onClick={addTask}>
                        추가
                    </button>
                </Col>
            </Row>

            <TodoBoard
                todoList={todoList}
                deleteTask={deleteTask}
                updateTask={updateTask}
            />
        </Container>
    );
}

export default App;
