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
} from "reactstrap";
import { BsPlusLg } from "react-icons/bs";

function ModalForm(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal((prev) => !prev);

  const { handleCreateTodo, args } = props;

  const refMessage = useRef();

  const createNote = () => {
    handleCreateTodo(refMessage.current.value);
    toggle();
  };

  return (
    <div>
      <BsPlusLg className="icon-plus" onClick={toggle}></BsPlusLg>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add ToDo</ModalHeader>
        <ModalBody>
          <div>
            <Form className="note-form">
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="title">ToDo</Label>
                    <Input
                      innerRef={refMessage}
                      id="title"
                      placeholder="Please enter the ToDo"
                      type="text"
                    />
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
