import React, { useState } from 'react';
import {Link} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" text="white" light expand="md" className="text-white">
        <NavbarBrand><Link to={"/"} ><img className="logo1" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576094329/f22ietnqwtslcbasqym1.png" alt="" width="150" height="50" /></Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            
          </Nav>
          
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  caret>
                Profile
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Edit
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Signout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;