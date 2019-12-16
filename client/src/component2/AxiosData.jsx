
import Axios from "axios";
import React,{useState} from "react"




export function GetAllUsers() {
    const [userData, setUserData]= useState()
    Axios.get('http://localhost:5001/users')
  .then(function (response) {
    // handle success
    console.log(response);
    setUserData(response)
    return userData
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
  .finally(function () {
    // always executed
  });
}


export function PostUser() {
    Axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}