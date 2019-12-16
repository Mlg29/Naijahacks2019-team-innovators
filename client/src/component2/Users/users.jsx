import React, { useEffect, Fragment, useState } from "react";
import Axios from "axios";
import { Table } from "reactstrap";
import { GetAllUsers } from "../AxiosData";
import Model from "../model/model"


function UsersDetail(props) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // console.log("this is all0",GetAllUsers());
    // GetAllUsers()

    Axios.get("http://localhost:5001/users")
      .then(function(response) {
        // handle success
        console.log(response.data.userData);
        setUserData(response.data.userData);
        return userData;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        return error;
      })
      .finally(function() {
        // always executed
      });
  }, []);
  
function DeleteFunct(id) {
    console.log(id);
    
    Axios.delete(`http://localhost:5001/users/${id}`)
      .then(function(response) {
        // handle success
        console.log("response",);
        console.log(response.data.userData);
        setUserData(response.data.userData);
        return userData;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
        return error;
      })
}
  return (
      <Fragment>
      <Model/>
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Location</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((item, index)=>{
            return <>
        <tr key={index}>
          <th scope="row" >{index+1}</th>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td><button className="btn btn-danger" onClick={()=>DeleteFunct(item._id)}>Del</button></td>
        </tr>
            </>
        })}
        
      </tbody>
    </Table>
    </Fragment>
  );
}

export default UsersDetail;
