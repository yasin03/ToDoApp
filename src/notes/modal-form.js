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
import { BsPlusLg } from "react-icons/bs";

function ModalForm(props) {
  const [rSelected, setRSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal((prev) => !prev);

  const { handleCreateTodo, args } = props;

  const refMessage = useRef();
  const refTitle = useRef();
  const refDate = useRef();

  const createNote = () => {
    const params = {
      title: refTitle.current.value,
      message: refMessage.current.value,
      date: refDate.current.value,
      bgColor: rSelected,
    };
    handleCreateTodo(params);
    toggle();
  };

  return (
    <div>
      <BsPlusLg className="icon-plus" onClick={toggle}></BsPlusLg>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add ToDo</ModalHeader>
        <ModalBody className={!rSelected ? "" : `${rSelected}`}>
          <div>
            <Form className="note-form">
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                      innerRef={refTitle}
                      id="title"
                      placeholder="Please enter the Title"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="title">ToDo</Label>
                    <Input
                      innerRef={refMessage}
                      id="title"
                      placeholder="Please enter the ToDo"
                      type="textarea"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                      innerRef={refDate}
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Select Color</Label>
                    <ButtonGroup className="w-100">
                      <Button
                        color="primary"
                        onClick={() => setRSelected("bg-primary")}
                        active={rSelected === "bg-primary"}
                      />

                      <Button
                        color="secondary"
                        onClick={() => setRSelected("bg-secondary")}
                        active={rSelected === "bg-secondary"}
                      />

                      <Button
                        color="success"
                        onClick={() => setRSelected("bg-success")}
                        active={rSelected === "bg-success"}
                      />

                      <Button
                        color="danger"
                        onClick={() => setRSelected("bg-danger")}
                        active={rSelected === "bg-danger"}
                      />

                      <Button
                        color="warning"
                        onClick={() => setRSelected("bg-warning")}
                        active={rSelected === "bg-warning"}
                      />

                      <Button
                        color="info"
                        onClick={() => setRSelected("bg-info")}
                        active={rSelected === "bg-info"}
                      />

                      <Button
                        color="dark"
                        onClick={() => setRSelected("bg-dark")}
                        active={rSelected === "bg-dark"}
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
          <Button color="warning" onClick={createNote}>
            Create ToDo
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalForm;
