import React, { useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
} from "reactstrap";
import { FiEdit3 } from "react-icons/fi";

function ModalEditForm(props) {
  const [rSelected, setRSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal((prev) => !prev);

  const { title, message, date, bgColor, completed, handleUpdateTodo, args } =
    props;

  const refMessage = useRef();
  const refTitle = useRef();
  const refDate = useRef();

  const editNote = () => {
    const params = {
      title: refTitle.current.value,
      message: refMessage.current.value,
      date: refDate.current.value,
      bgColor: rSelected,
    };
    console.log(title);
    handleUpdateTodo(params);
    toggle();
  };

  return (
    <div>
      <FiEdit3
        className="icon-plus"
        onClick={toggle}
        style={{ color: "blue", cursor: "pointer" }}
      ></FiEdit3>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add ToDo</ModalHeader>
        <ModalBody
          style={
            !rSelected
              ? { backgroundColor: "#FFFFFF" }
              : { backgroundColor: `${rSelected}` }
          }
        >
          <div>
            <Form className="note-form">
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input innerRef={refTitle} id="title" type="text">
                      {title}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="title">ToDo</Label>
                    <Input
                      innerRef={refMessage}
                      id="title"
                      placeholder="Please enter the ToDo"
                      type="textarea"
                    >{message}</Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                      innerRef={refDate}
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Select Color</Label>
                    <ButtonGroup className="w-100">
                      <Button
                        style={{ backgroundColor: "#5FBEE3" }}
                        onClick={() => setRSelected("#5FBEE3")}
                        active={rSelected === "#5FBEE3"}
                      />

                      <Button
                        style={{ backgroundColor: "#7DED8C" }}
                        onClick={() => setRSelected("#7DED8C")}
                        active={rSelected === "#7DED8C"}
                      />

                      <Button
                        style={{ backgroundColor: "#D7FD6C" }}
                        onClick={() => setRSelected("#D7FD6C")}
                        active={rSelected === "#D7FD6C"}
                      />

                      <Button
                        style={{ backgroundColor: "#FC9362" }}
                        onClick={() => setRSelected("#FC9362")}
                        active={rSelected === "#FC9362"}
                      />

                      <Button
                        style={{ backgroundColor: "#F77EB0" }}
                        onClick={() => setRSelected("#F77EB0")}
                        active={rSelected === "#F77EB0"}
                      />
                    </ButtonGroup>
                    <p>Selected: {rSelected}</p>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={editNote}>
            Update ToDo
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalEditForm;
