import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Input,
} from "reactstrap";
import { FaTrashAlt } from "react-icons/fa";

import ModalEditForm from "./modal-edit-form";

const Note = (props) => {
  const {
    id,
    title,
    message,
    date,
    bgColor,
    completed,
    handleDeleteTodo,
    handleUpdateTodo,
  } = props;

  const [check, setCheck] = useState(completed);

  const updateTodo = (e) => {
    setCheck(e.target.checked);
    const params = {
      title: title,
      message: message,
      date: date,
      bgColor: bgColor,
      completed: check,
    };
    handleUpdateTodo(id, params);
  };

  const editTodo = (e) => {
    setCheck(e.target.checked);
    const params = {
      title: title,
      message: message,
      date: date,
      bgColor: bgColor,
      completed: check,
    };
    handleUpdateTodo(id, params);
  };

  const deleteTodo = () => {
    const resp = window.confirm("Are you sure you want to delete this todo");
    if (!resp) return;
    handleDeleteTodo(id);
  };

  return (
    <Card className="h-100 card-todo">
      <CardTitle className="card-cardtitle" tag="h5">
        {title}
      </CardTitle>
      <CardBody
        className="card-cardbody"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <CardText>{message}</CardText>
      </CardBody>
      <CardFooter className="d-flex gap-3 justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <Input
            type="checkbox"
            valid
            checked={completed}
            onChange={(e) => updateTodo(e)}
          />

          <ModalEditForm handleUpdateTodo={handleUpdateTodo} message title date bgColor completed />

          <FaTrashAlt
            style={{ color: "red", cursor: "pointer" }}
            onClick={deleteTodo}
          ></FaTrashAlt>
        </div>
        <div>
          <small>
            <i>{date}</i>
          </small>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Note;
