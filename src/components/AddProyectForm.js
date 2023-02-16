import React, { useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddProjectForm = () => {
  const [formValues, setFormValues] = useState({
    proyecto: "",
    trabajo: "",
    mote: "",
    promotor: "",
    situacion: "",
    localidad: "",
    telefono: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer la llamada a la base de datos para guardar el nuevo proyecto
    console.log("Form submitted with values:", formValues);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row >
        <Col>
          <Form.Group controlId="formProyecto">
            <Form.Label>Proyecto:</Form.Label>
            <Form.Control
              type="text"
              name="proyecto"
              value={formValues.proyecto}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col className = "col-md-2">
          <Form.Group controlId="formTrabajo">
            <Form.Label>Trabajo:</Form.Label>
            <Form.Control
              type="text"
              name="trabajo"
              value={formValues.trabajo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col className = "col-md-2">
          <Form.Group controlId="formMote">
            <Form.Label>Mote:</Form.Label>
            <Form.Control
              type="text"
              name="mote"
              value={formValues.mote}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formPromotor">
            <Form.Label>Promotor:</Form.Label>
            <Form.Control
              type="text"
              name="promotor"
              value={formValues.promotor}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formSituacion">
            <Form.Label>Situación:</Form.Label>
            <Form.Control
              type="text"
              name="situacion"
              value={formValues.situacion}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formLocalidad">
            <Form.Label>Localidad:</Form.Label>
            <Form.Control
              type="text"
              name="localidad"
              value={formValues.localidad}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono:</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={formValues.telefono}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col className="align-self-end">
            <Button type="submit">Guardar</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddProjectForm;
