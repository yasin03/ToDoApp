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

  const [check, setCheck] = useState({ completed });

  const updateTodo = (e) => {
    setCheck(e.target.checked);
    handleUpdateTodo(id,check);
    console.log(id);
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
          <FaTrashAlt
            style={{ color: "red", cursor: "pointer" }}
            onClick={deleteTodo}
          ></FaTrashAlt>
        </div>
        <div>
          <span>{date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Note;
