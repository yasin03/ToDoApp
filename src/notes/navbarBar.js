import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { BsStickiesFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import ModalForm from "./modal-form";
import ModalColor from "./modal-color";

const NavbarBar = (props) => {
  const { handleCreateTodo } = props;
  return (
    <Navbar className="navbar-barr" color="dark" dark>
      <div className="d-flex gap-3 align-items-center">
        <ModalForm handleCreateTodo={handleCreateTodo} />
      </div>
      <NavbarBrand href="/" className=" brand d-flex gap-3">
        <span>
          <BsStickiesFill className="icon-logo" />
        </span>
        <span>ToDo App</span>
      </NavbarBrand>
    </Navbar>
  );
};

export default NavbarBar;
