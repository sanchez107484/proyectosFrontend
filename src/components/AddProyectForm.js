import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import proyectosService from '../services/proyectosService';
//import refreshTable from "../utils/refreshTable";

const AddProjectForm = () => {
  const [newProyecto, setNewProyecto] = useState({
    PROYECTOS: "",
    TRABAJO: "",
    Mote: "",
    Promotor: "",
    Situacion: "",
    Localidad: "",
    Telefono: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    proyectosService.createProyecto(newProyecto)
    .then((response) => {
      console.log("Nuevo proyecto:", response);
      setNewProyecto({
        PROYECTOS: "",
        TRABAJO: "",
        Mote: "",
        Promotor: "",
        Situacion: "",
        Localidad: "",
        Telefono: "",
      });
      //refreshTable();
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
            <Form.Label>Proyecto:</Form.Label>
            <Form.Control
              type="text"
              name="PROYECTOS"
              value={newProyecto.PROYECTOS}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col className = "col-md-2">
          <Form.Group controlId="formTrabajo">
            <Form.Label>Trabajo:</Form.Label>
            <Form.Control
              type="text"
              name="TRABAJO"
              value={newProyecto.TRABAJO}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col className = "col-md-2">
          <Form.Group controlId="formMote">
            <Form.Label>Mote:</Form.Label>
            <Form.Control
              type="text"
              name="Mote"
              value={newProyecto.Mote}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPromotor">
            <Form.Label>Promotor:</Form.Label>
            <Form.Control
              type="text"
              name="Promotor"
              value={newProyecto.Promotor}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSituacion">
            <Form.Label>Situación:</Form.Label>
            <Form.Control
              type="text"
              name="Situacion"
              value={newProyecto.Situacion}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLocalidad">
            <Form.Label>Localidad:</Form.Label>
            <Form.Control
              type="text"
              name="Localidad"
              value={newProyecto.Localidad}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="text"
              name="Telefono"
              value={newProyecto.Telefono}
              onChange={handleInputChange}
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
