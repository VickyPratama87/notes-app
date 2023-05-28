import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

function ArchiveButton({ id, onArchieveNoteHandler }) {
  return (
    <Button variant="secondary" onClick={() => onArchieveNoteHandler(id)}>
      <FontAwesomeIcon icon={faArchive} /> Arsipkan
    </Button>
  );
}

export default ArchiveButton;
