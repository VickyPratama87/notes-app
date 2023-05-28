import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

function RemoveButton({ id, onRemoveNoteHandler }) {
  return (
    <Button variant="success" onClick={() => onRemoveNoteHandler(id)}>
      <FontAwesomeIcon icon={faRetweet} /> Pindahkan
    </Button>
  );
}

export default RemoveButton;
