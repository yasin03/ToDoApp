import React from "react";
import Note from "./note";
import { Col } from "reactstrap";

const Notes = (props) => {
  const { todos, handleDeleteTodo, handleUpdateTodo } = props;
  return (
    <>
      {todos.map((todo, i) => (
        <Col className="card-container" key={i}>
          <Note
            {...todo}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        </Col>
      ))}
    </>
  );
};

export default Notes;
