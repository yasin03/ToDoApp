import React, { useRef } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const NoteForm = (props) => {
  const { handleCreateTodo } = props;

  const refMessage = useRef();

  const createNote = () => {
    handleCreateTodo(refMessage.current.value);
  };

  return (
    <div>
      <Form className="note-form">
        <Row>
          <Col>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                innerRef={refMessage}
                id="title"
                placeholder="Please enter the message"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="warning" onClick={createNote}>
          Create Note
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
