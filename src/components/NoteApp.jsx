import React from "react";
import { getData } from "../utils/data";
import AllNote from "./AllNotes";
import NavbarComponnets from "./NavbarComponents";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      term: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onRemoveNoteHandler = this.onRemoveNoteHandler.bind(this);
    this.onArchieveNoteHandler = this.onArchieveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.getFilteredNotes = this.getFilteredNotes.bind(this);
  }

  onAddNoteHandler({ title, description }) {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: +new Date(),
            title,
            body: description,
            createdAt: new Date().toISOString(),
            archived: false,
          },
          ...prevState.notes,
        ],
      };
    });
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.filter((note) => {
        if (note.id !== id) {
          return true;
        }
        return false;
      });
      return { notes };
    });
  }

  onArchieveNoteHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        return note.id !== id ? note : { ...note, archived: true };
      });
      return { notes };
    });
  }

  onRemoveNoteHandler(id) {
    this.setState((prevState) => {
      const notes = prevState.notes.map((note) => {
        return note.id !== id ? note : { ...note, archived: false };
      });
      return { notes };
    });
  }

  onSearchNoteHandler(title) {
    this.setState({ term: title });
    console.log(title);
  }

  getFilteredNotes() {
    return this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.term.toLowerCase());
    });
  }

  render() {
    return (
      <div className="note-app pt-3">
        <NavbarComponnets onSearchNoteHandler={this.onSearchNoteHandler} />
        <NoteInput onAddNoteHandler={this.onAddNoteHandler} />
        <AllNote notes={this.getFilteredNotes()} onDeleteHandler={this.onDeleteHandler} onRemoveNoteHandler={this.onRemoveNoteHandler} onArchieveNoteHandler={this.onArchieveNoteHandler} />
      </div>
    );
  }
}

export default NoteApp;
