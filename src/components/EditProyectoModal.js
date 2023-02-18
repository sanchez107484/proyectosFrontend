import { useState,useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";


const EditProyectoModal = ({ project, show, handleClose, handleSave }) => {
  const [editedProject, setEditedProject] = useState(project);

  /* useEffect(() => setEditedProject(project),[project]); */


  const handleChange = (e) => {
    setEditedProject({ ...editedProject, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/LISTADO/${project.CROQUIS}`, {...editedProject})
      .then(response => {
        console.log(response.data); // datos de la respuesta del servidor
      })
      .catch(error => {
        console.error(error);
      });
      handleSave();
      handleClose();
      setEditedProject({});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicCROQUIS">
            <Form.Label>CROQUIS</Form.Label>
            <Form.Control
              type="text"
              name="CROQUIS"
              placeholder={project.CROQUIS}
              value={editedProject.CROQUIS}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPROYECTOS">
            <Form.Label>PROYECTOS</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="PROYECTOS"
              placeholder={project.PROYECTOS}
              value={editedProject.PROYECTOS}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTRABAJO">
            <Form.Label>TRABAJO</Form.Label>
            <Form.Control
              type="text"
              name="TRABAJO"
              placeholder={project.TRABAJO}
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
