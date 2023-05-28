import React from "react";
import { Form, Button, Card } from "react-bootstrap";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onDescriptionChangeEventHandler(event) {
    this.setState(() => {
      return {
        description: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNoteHandler(this.state);
    this.setState(() => {
      return {
        title: "",
        description: "",
      };
    });
  }

  onResetEventHandler(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        title: "",
        description: "",
      };
    });
  }

  render() {
    return (
      <div className="form mt-5">
        <Card className="p-3 mb-3">
          <h2 className="text-center">Tambah Catatan</h2>
          <Form className="note-input" onSubmit={this.onSubmitEventHandler} onReset={this.onResetEventHandler}>
            <Form.Group className="mb-3" controlId="formJudul">
              <Form.Label>Judul Catatan</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Judul Catatan" required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Tuliskan Deskripsi Catatan" required value={this.state.description} onChange={this.onDescriptionChangeEventHandler} />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Tambahkan
              </Button>
              <Button variant="danger" type="reset">
                Batal
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default NoteInput;
