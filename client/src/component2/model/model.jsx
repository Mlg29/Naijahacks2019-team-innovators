import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UncontrolledTooltip } from "reactstrap";
import SignUp from "../../pages/signup/createForm"


const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <button  onClick={toggle} id="UncontrolledTooltipExample" className="btn-success btn mb-5" tooltip="add user"><img src="/assets/img/userAdd.svg" alt="add image"  style={{ width: '30px' , fontSize: 40 }}/></button>
      <UncontrolledTooltip placement="buttom" target="UncontrolledTooltipExample">
        Add New Users
      </UncontrolledTooltip>
      {/* <Button color="danger" onClick={toggle}>click to toglle</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}><h3>Add User</h3></ModalHeader>
        <ModalBody>
        <SignUp/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ModalExample;