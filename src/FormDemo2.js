import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to database!");
    alertify.success(this.state.password + " added to database!");
    alertify.success(this.state.city + " added to database!");
    alertify.success(this.state.description + " added to database!");

  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup className="col-md-6">
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup className="col-md-6">
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup className="col-md-6">
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup className="col-md-6">
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>Çanakkale</option>
              <option>İzmir</option>
              <option>Diyarbakır</option>
            </Input>
          </FormGroup>
        <Button className="mt-2" type="submit">Save</Button>
        </form>
      </div>
    );
  }
}
