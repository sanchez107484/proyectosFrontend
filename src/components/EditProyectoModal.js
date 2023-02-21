import { useState,useEffect } from "react";
import { Modal, Button, Form, Row, Col} from "react-bootstrap";
import proyectosService from '../services/proyectosService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditProyectoModal = ({ project, show, handleClose, handleSave}) => {
  const [editedProject, setEditedProject] = useState(project);

  useEffect(() => {
    if (project.CROQUIS){
      setEditedProject(project);
    }
  },[project]);

  const handleChange = (event) => {
    const { name, value, type,checked } = event.target;
    var valor = value;
    
    if (type === "checkbox"){
      valor = checked;
      if (valor !== true){
        valor = null;
      }
    }
    setEditedProject({ ...editedProject, [name]: valor });
  };
  
  const handleChangeFechas = (date,name) => {
    setEditedProject({ ...editedProject, [name]: date })
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await proyectosService.updateProyecto(editedProject)
      .then(response => {
        console.log(response);
        setEditedProject({});
        handleSave();
        handleClose();
      })
      .catch(error => {
        console.error(error);
      });
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
          <Row>
            <Col className = "col-md-3">
              <Form.Group controlId="formBasicPROYECTOS">
                <Form.Label>PROYECTOS</Form.Label>
                <Form.Control
                  type="text"
                  name="PROYECTOS"
                  placeholder={project.PROYECTOS}
                  value={editedProject.PROYECTOS || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicTRABAJO">
                <Form.Label>TRABAJO</Form.Label>
                <Form.Control
                  type="text"
                  name="TRABAJO"
                  placeholder={project.TRABAJO}
                  value={editedProject.TRABAJO || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className = "col-md-3">
              <Form.Group controlId="formMote">
                <Form.Label>Mote:</Form.Label>
                <Form.Control
                  type="text"
                  name="Mote"
                  value={editedProject.Mote || ''}
                  onChange={handleChange}
              />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formPromotor">
                <Form.Label>Promotor:</Form.Label>
                <Form.Control
                  type="text"
                  name="Promotor"
                  value={editedProject.Promotor || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formSituacion">
                <Form.Label>Situación:</Form.Label>
                <Form.Control
                  type="text"
                  name="Situacion"
                  value={editedProject.Situacion || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLocalidad">
                <Form.Label>Localidad:</Form.Label>
                <Form.Control
                  type="text"
                  name="Localidad"
                  value={editedProject.Localidad || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col className = "col-md-3">
              <Form.Group controlId="formTelefono">
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control
                  type="text"
                  name="Telefono"
                  value={editedProject.Telefono || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Form.Group controlId="formCroquis_Inicio">
                <Form.Label>Croquis_Inicio:</Form.Label>
                  <DatePicker
                    selected={editedProject.Croquis_Inicio ? new Date(editedProject.Croquis_Inicio) : null}
                    onChange={date => handleChangeFechas(date,'Croquis_Inicio')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formCroquis_Fin">
                <Form.Label>Croquis_Fin:</Form.Label>
                <DatePicker
                    selected={editedProject.Croquis_Fin ? new Date(editedProject.Croquis_Fin) : null}
                    onChange={date => handleChangeFechas(date,'Croquis_Fin')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formProyecto_Ejecucion_Inicio">
                <Form.Label>Proyecto_Ejecucion_Inicio:</Form.Label>
                <DatePicker
                    selected={editedProject.Proyecto_Ejecucion_Inicio ? new Date(editedProject.Proyecto_Ejecucion_Inicio) : null}
                    onChange={date => handleChangeFechas(date,'Proyecto_Ejecucion_Inicio')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formProyecto_Ejecucion_Fin">
                <Form.Label>Proyecto_Ejecucion_Fin:</Form.Label>
                <DatePicker
                    selected={editedProject.Proyecto_Ejecucion_Fin ? new Date(editedProject.Proyecto_Ejecucion_Fin) : null}
                    onChange={date => handleChangeFechas(date,'Proyecto_Ejecucion_Fin')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formVisado_Enviado">
                <Form.Label>Visado_Enviado:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="Visado_Enviado"
                  checked={editedProject.Visado_Enviado || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formVisado_Descargado">
                <Form.Label>Visado_Descargado:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="Visado_Descargado"
                  checked={editedProject.Visado_Descargado || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLicencia">
                <Form.Label>Licencia:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="Licencia"
                  checked={editedProject.Licencia || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFactura">
                <Form.Label>Factura:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="Factura"
                  checked={editedProject.Factura || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Form.Group controlId="formObras_Construccion_Inicio">
                <Form.Label>Obras_Construccion_Inicio:</Form.Label>
                <DatePicker
                    selected={editedProject.Obras_Construccion_Inicio ? new Date(editedProject.Obras_Construccion_Inicio) : null}
                    onChange={date => handleChangeFechas(date,'Obras_Construccion_Inicio')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formObras_Construccion_Fin">
                <Form.Label>Obras_Construccion_Fin:</Form.Label>
                <DatePicker
                    selected={editedProject.Obras_Construccion_Fin ? new Date(editedProject.Obras_Construccion_Fin) : null}
                    onChange={date => handleChangeFechas(date,'Obras_Construccion_Fin')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formVisadoFO_Enviado">
                <Form.Label>VisadoFO_Enviado:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="VisadoFO_Enviado"
                  checked={editedProject.VisadoFO_Enviado || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formVisadoFO_Descargado">
                <Form.Label>VisadoFO_Descargado:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="VisadoFO_Descargado"
                  checked={editedProject.VisadoFO_Descargado || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFacturaFO">
                <Form.Label>FacturaFO:</Form.Label>
                <Form.Check
                  type="checkbox"
                  name="FacturaFO"
                  checked={editedProject.FacturaFO || null}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button className="form-control mb-3" type="submit">Guardar</Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProyectoModal;
