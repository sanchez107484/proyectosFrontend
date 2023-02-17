import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";


const EditProyectoModal = ({ project, show, handleClose, handleSave }) => {
  const [editedProject, setEditedProject] = useState(project);

  const handleChange = (e) => {
    setEditedProject({ ...editedProject, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/projects/${editedProject.id}`, {
        ...editedProject,
      });
      handleSave(response.data);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editedProject.CROQUIS}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={editedProject.PROYECTOS}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              name="status"
              value={editedProject.TRABAJO}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProyectoModal;
