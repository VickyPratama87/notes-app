import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DeleteButton({ id, onDeleteHandler }) {
  return (
    <Button variant="danger" onClick={() => onDeleteHandler(id)}>
      <FontAwesomeIcon icon={faTrash} /> Hapus
    </Button>
  );
}

export default DeleteButton;
