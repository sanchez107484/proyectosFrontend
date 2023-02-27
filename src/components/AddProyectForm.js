import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import proyectosService from '../services/ProyectosService';
import { newProyectoVacio } from "./newProyectoVacio";
import locals from "../locals/locals";

const AddProjectForm = (props) => {
  const [newProyecto, setNewProyecto] = useState(newProyectoVacio);

  const handleSubmit = async (event) => {
    event.preventDefault();
    proyectosService.createProyecto(newProyecto)
    .then((response) => {
      setNewProyecto(newProyectoVacio);
      props.reloadPage();
    });
    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProyecto({ ...newProyecto, [name]: value });
  };

  return (
    <div>
    <h2>Añadir proyecto</h2>
    <Form onSubmit={handleSubmit}>
      <Row >
        <Col>
          <Form.Group controlId="formProyecto">
            <Form.Label>{locals.PROYECTOS}:</Form.Label>
            <Form.Control
              type="text"
              name="PROYECTOS"
              value={newProyecto.PROYECTOS}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col className = "col-md-2">
          <Form.Group controlId="formTrabajo">
            <Form.Label>{locals.TRABAJO}:</Form.Label>
            <Form.Control
              type="text"
              name="TRABAJO"
              value={newProyecto.TRABAJO}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col className = "col-md-2">
          <Form.Group controlId="formMote">
            <Form.Label>{locals.Mote}:</Form.Label>
            <Form.Control
              type="text"
              name="Mote"
              value={newProyecto.Mote}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPromotor">
            <Form.Label>{locals.Promotor}:</Form.Label>
            <Form.Control
              type="text"
              name="Promotor"
              value={newProyecto.Promotor}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSituacion">
            <Form.Label>{locals.Situacion}:</Form.Label>
            <Form.Control
              type="text"
              name="Situacion"
              value={newProyecto.Situacion}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLocalidad">
            <Form.Label>{locals.Localidad}:</Form.Label>
            <Form.Control
              type="text"
              name="Localidad"
              value={newProyecto.Localidad}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formTelefono">
            <Form.Label>{locals.Telefono}:</Form.Label>
            <Form.Control
              type="text"
              name="Telefono"
              value={newProyecto.Telefono}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Col>
        <Col className="align-self-end">
            <Button type="submit">Guardar</Button>
        </Col>
      </Row>
    </Form>
    </div>
  );
};

export default AddProjectForm;
