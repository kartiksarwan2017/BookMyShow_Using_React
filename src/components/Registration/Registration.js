import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function Registration() {

  const [username, setUsername] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [userpassword, setUserPassword] = useState("");


  function clearInput() {
    setUsername("");
    setEmailAddress("");
    setUserPassword("");
  }

  const userPost = async () => {
    // console.log(username, emailaddress, userpassword);

    const userDetails = {
      "username": username,
      "email": emailaddress,
      "password": userpassword
    }
    
    // console.log(userDetails);

    await axios.post('https://book-my-show-node-js-express-seven.vercel.app/user-register', userDetails)
      .then((data) => {

        Swal.fire({
          title: `<strong>${data.data.message}</strong>`,
          icon: 'success',
          showCloseButton: true
        });
        clearInput();

    }).catch((err) => 

      Swal.fire({
        title: `<strong>${err.message}</strong>`,
        icon: 'error',
        showCloseButton: true
    }));

    // const response = await axios.post('https://book-my-show-node-js-express-seven.vercel.app/user-register', userDetails);
    // console.log(response);
 
  };

  return (
    <>
      <div>
        <Container style={{padding: "7%"}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit" onClick={userPost}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Registration;
