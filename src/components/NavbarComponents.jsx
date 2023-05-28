import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class NavbarComponnets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.props.onSearchNoteHandler(this.state.term);
  }

  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Notes App</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Cari Catatan" className="me-2" aria-label="Search" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
            <Button variant="success" onClick={this.handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponnets;
