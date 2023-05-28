import React from "react";
import NoteActive from "./NoteActive";
import NoteArchieve from "./NoteArchieve";
import { Row, Col, Card } from "react-bootstrap";

function AllNote({ notes, onDelete, onRemoveNoteHandler, onArchieveNoteHandler, onDeleteHandler }) {
  return (
    <div className="all-notes md-6">
      <Card className="p-3 mb-3">
        <h2 className="text-center mb-3">Catatan Aktif</h2>
        <Row>
          {notes.filter((note) => note.archived === false).length !== 0 ? (
            notes
              .filter((note) => note.archived === false)
              .map((note) => (
                <Col sm={6} key={note.id}>
                  <NoteActive id={note.id} onDelete={onDelete} {...note} onArchieveNoteHandler={onArchieveNoteHandler} onDeleteHandler={onDeleteHandler} />
                </Col>
              ))
          ) : (
            <h3 className="text-center">Tidak ada Catatan</h3>
          )}
        </Row>
      </Card>

      <Card className="p-3">
        <h2 className="text-center mb-3">Arsip</h2>
        <Row>
          {notes.filter((note) => note.archived === true).length !== 0 ? (
            notes
              .filter((note) => note.archived === true)
              .map((note) => (
                <Col sm={6} key={note.id}>
                  <NoteArchieve key={note.id} id={note.id} onDelete={onDelete} onRemoveNoteHandler={onRemoveNoteHandler} {...note} onDeleteHandler={onDeleteHandler} />
                </Col>
              ))
          ) : (
            <h3 className="text-center">Tidak Ada Catatan</h3>
          )}
        </Row>
      </Card>
    </div>
  );
}

export default AllNote;
