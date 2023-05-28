import React from "react";
import { Card } from "react-bootstrap";
import DeleteButton from "./DeleteButton";
import RemoveButton from "./RemoveButton";
import { showFormattedDate } from "../utils/data";

function NoteArchieve({ id, title, body, createdAt, onRemoveNoteHandler, onDeleteHandler }) {
  return (
    <div className="note-active">
      <Card className="fluid mb-3">
        <Card.Body className=" d-flex flex-column justify-content-between">
          <div className="">
            <Card.Title className="fw-bold">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{showFormattedDate(createdAt)}</Card.Subtitle>
            <Card.Text>{body}</Card.Text>
          </div>
          <div className="d-flex justify-content-between">
            <DeleteButton id={id} onDeleteHandler={onDeleteHandler} />
            <RemoveButton id={id} onRemoveNoteHandler={onRemoveNoteHandler} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoteArchieve;
