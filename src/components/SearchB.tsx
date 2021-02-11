import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  search: (query: string) => void;
}

interface State {
  search: string;
}

class SearchB extends Component<Props, State> {
  state = {
    search: "",
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.search(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="w-75">
        <Form.Group className="d-flex">
          <Form.Control
            type="text"
            placeholder="enter somnething"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.currentTarget.value })}
          />
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchB;
