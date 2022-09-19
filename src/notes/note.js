import React, { useRef, useState } from "react";
import { Card, CardBody, CardFooter, CardTitle, Input } from "reactstrap";
import { FaTrashAlt } from "react-icons/fa";

const Note = (props) => {
  const { id, message, completed, handleDeleteTodo, handleUpdateTodo } = props;

  const [check, setCheck] = useState({ completed });


  const updateTodo = (e) => {
    setCheck(e.target.checked);
    handleUpdateTodo(id, check);
  };

  const deleteTodo = () => {
    const resp = window.confirm("Are you sure you want to delete this todo");
    if (!resp) return;
    handleDeleteTodo(id);
  };

  return (
    <Card className="h-100 card-todo">
      <CardBody>
        <CardTitle tag="h6">{message}</CardTitle>
      </CardBody>
      <CardFooter className="d-flex gap-3 align-items-center">
        <Input
          type="checkbox"
          valid
          checked={completed}
          onChange={(e) => updateTodo(e)}
        ></Input>
        <FaTrashAlt
          style={{ color: "red", cursor: "pointer" }}
          onClick={deleteTodo}
        ></FaTrashAlt>
      </CardFooter>
    </Card>
  );
};

export default Note;
