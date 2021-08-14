import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Content from "./Components/Content";
import Card from "react-bootstrap/Card";
import "./Profile.css";

class Profile extends Component {
  render() {
    // console.log(this.props);
    const { user, isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated && (
        //<div>
        <div className="profile-container">
          <Card style={{ width: "18rem" }}></Card>
          {/*<img src={user.picture} alt={user.name} />*/}
          <Card.Img variant="top" src={user.picture} alt={user.name} />
          {/*<div> {user.name}</div>

        <p>
          {user.email}
        </p>*/}
          <Card.Body>
            <Card.Title>
              <h2>{user.name}</h2>
            </Card.Title>
            <Card.Text>
              <p>{user.email}</p>
            </Card.Text>
          </Card.Body>
          <Content />
        </div>
      )
    );
  }
}

export default withAuth0(Profile);
