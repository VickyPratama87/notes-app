import React from "react";
import { Card } from "react-bootstrap";
import ArchiveButton from "./ArchieveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/data";

function NoteActive({ id, title, body, createdAt, onArchieveNoteHandler, onDeleteHandler }) {
  return (
    <div className="note-active">
      <Card className="fluid mb-3">
        <Card.Body className=" d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="fw-bold">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{showFormattedDate(createdAt)}</Card.Subtitle>
            <Card.Text>{body}</Card.Text>
          </div>
          <div className="d-flex justify-content-between">
            <DeleteButton id={id} onDeleteHandler={onDeleteHandler} />
            <ArchiveButton id={id} onArchieveNoteHandler={onArchieveNoteHandler} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoteActive;
