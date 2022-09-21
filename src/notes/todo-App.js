import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Notes from "./notes";
import { createToDo, deleteToDo, getToDos, updateToDo } from "./api";
import NavbarBar from "./navbarBar";
import ModalColor from "./modal-color";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [colorVal, setColorVal] = useState("rgb(252, 161, 128)");

  const handleGetTodo = async () => {
    const resp = await getToDos();
    setTodos(resp.data);
  };

  const handleCreateTodo = async (props) => {
    const { title, message, date, bgColor } = props;
    const params = {
      title: title,
      message: message,
      date: date,
      bgColor: bgColor,
      completed: false,
    };

    const resp = await createToDo(params);
    setTodos([resp.data, ...todos]);
  };

  const handleUpdateTodo = async (id, completed) => {
    const params = {
      completed: completed,
      id: id,
    };

    const resp = await updateToDo(params);
    const arr = todos.filter((todo) => todo.id !== resp.data.id);
    setTodos([resp.data, ...arr]);
  };

  const handleDeleteTodo = async (id) => {
    const resp = await deleteToDo(id);
    const arr = todos.filter((todo) => todo.id !== resp.data.id);
    setTodos([...arr]);
  };

  const changeBodyColor = (colorVal) => {
    setColorVal(colorVal);
  };

  useEffect(() => {
    handleGetTodo();
  }, []);

  return (
    <>
      <NavbarBar handleCreateTodo={handleCreateTodo} />
      <ModalColor changeBodyColor={changeBodyColor} />
      <div
        className="todo-container"
        style={{ backgroundColor: `${colorVal}`, padding: 0, margin: 0 }}
      >
        <Container className="container-app">
          <Row className="">
            {/* 
            <Col sm={12} md={4}>
              <NoteForm
                className="note-form"
                handleCreateTodo={handleCreateTodo}
              />
            </Col>
            */}

            <Notes
              className="notes"
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ToDoApp;
