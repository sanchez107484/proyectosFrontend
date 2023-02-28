import { useState,useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import proyectosService from '../services/ProyectosService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import colors from "../styles/colors";
import locals from "../locals/locals";
import moment from 'moment-timezone';

const EditProyectoModal = ({ project, show, handleClose, handleSave}) => {
  const [editedProject, setEditedProject] = useState(project);

  useEffect(() => {
    if (project.CROQUIS){
      setEditedProject(project);
      cambiarColor(project.Estado ? project.Estado : "En curso");
    }
  },[project]);

  const handleChange = (event) => {
    const { name, value, type,checked } = event.target;
    var valor = value;
    if (type === "checkbox"){
      console.log(name , ":", checked);
      valor = checked;
      if (valor !== true){
        valor = null;
      }
    }else if (type === "select-one") {
      cambiarColor(valor);
    }
    setEditedProject({ ...editedProject, [name]: valor });
  };
  
  const handleChangeFechas = (date,name) => {
    if (date){
      date = moment(date).tz('Europe/Madrid').format('YYYY-MM-DD');
    }
    setEditedProject({ ...editedProject, [name]: date })
    
  };

  function cambiarColor(valor) {
    var select = document.getElementsByName('Estado')[0];
    if (valor === "En curso") {
      select.style.backgroundColor = colors.enCurso;
    } else if (valor === "Finalizado") {
      select.style.backgroundColor = colors.finalizado;
    } else {
      select.style.backgroundColor = colors.blanco; 
    }
  }

  function validateEditedProject() {
    //Fechas por defecto a null
    for (let key in editedProject) {
      if (editedProject[key] === '1970-01-01' || editedProject[key] === '0000-00-00') {
        editedProject[key] = null;
      }
    }
    //Estado inicializo a En curso
    if (editedProject.Estado === null || editedProject.Estado === ""){
      editedProject.Estado = "En curso";
    }
    return editedProject ;   
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedEditedProject = validateEditedProject();  
      await proyectosService.updateProyecto(validatedEditedProject)
      .then(response => {
        setEditedProject({});
        handleSave();
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
        <Modal.Title>Editar Proyecto - {editedProject.CROQUIS}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col className = "col-md-3">
              <Form.Group controlId="formBasicPROYECTOS">
                <Form.Label><b>{locals.PROYECTOS}</b></Form.Label>
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
                <Form.Label><b>{locals.TRABAJO}</b></Form.Label>
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
                <Form.Label><b>{locals.Mote}</b></Form.Label>
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
                <Form.Label><b>{locals.Promotor}</b></Form.Label>
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
                <Form.Label><b>{locals.Situacion}</b></Form.Label>
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
                <Form.Label><b>{locals.Localidad}</b></Form.Label>
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
                <Form.Label><b>{locals.Telefono}</b></Form.Label>
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
                <Form.Label><b>{locals.Croquis_Inicio}</b></Form.Label>
                  <DatePicker
                    selected={editedProject.Croquis_Inicio ? new Date(editedProject.Croquis_Inicio) : null}
                    onChange={date => handleChangeFechas(date,'Croquis_Inicio')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                    timeZone="Europe/Madrid" 
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formCroquis_Fin">
                <Form.Label><b>{locals.Croquis_Fin}</b></Form.Label>
                <DatePicker
                    selected={editedProject.Croquis_Fin ? new Date(editedProject.Croquis_Fin) : null}
                    onChange={date => handleChangeFechas(date,'Croquis_Fin')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                    timeZone="Europe/Madrid" 
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formProyecto_Ejecucion_Inicio">
                <Form.Label><b>{locals.Proyecto_Ejecucion_Inicio}</b></Form.Label>
                <DatePicker
                    selected={editedProject.Proyecto_Ejecucion_Inicio ? new Date(editedProject.Proyecto_Ejecucion_Inicio) : null}
                    onChange={date => handleChangeFechas(date,'Proyecto_Ejecucion_Inicio')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                    timeZone="Europe/Madrid" 
                  />
              </Form.Group>
            </Col>
            <Col className="mb-3">
              <Form.Group controlId="formProyecto_Ejecucion_Fin">
                <Form.Label><b>{locals.Proyecto_Ejecucion_Fin}</b></Form.Label>
                <DatePicker
                    selected={editedProject.Proyecto_Ejecucion_Fin ? new Date(editedProject.Proyecto_Ejecucion_Fin) : null}
                    onChange={date => handleChangeFechas(date,'Proyecto_Ejecucion_Fin')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                    timeZone="Europe/Madrid" 
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formVisado_Enviado">
                <Form.Check
                  type="checkbox"
                  name="Visado_Enviado"
                  label={locals.Visado_Enviado}
                  checked={editedProject.Visado_Enviado || false}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formVisado_Descargado">
                <Form.Check
                  type="checkbox"
                  name="Visado_Descargado"
                  label={locals.Visado_Descargado}
                  checked={editedProject.Visado_Descargado || false}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              
            </Col>
            <Col>
              <Form.Group controlId="formLicencia">
                <Form.Check
                  type="checkbox"
                  name="Licencia"
                  label={locals.Licencia}
                  checked={editedProject.Licencia || false}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFactura">
                <Form.Check
                  type="checkbox"
                  name="Factura"
                  label={locals.Factura}
                  checked={editedProject.Factura || false}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Form.Group controlId="formObras_Construccion_Inicio">
                <Form.Label><b>{locals.Obras_Construccion_Inicio}</b></Form.Label>
                <DatePicker
                    selected={editedProject.Obras_Construccion_Inicio ? new Date(editedProject.Obras_Construccion_Inicio) : null}
                    onChange={date => handleChangeFechas(date,'Obras_Construccion_Inicio')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                    timeZone="Europe/Madrid" 
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formObras_Construccion_Fin">
                <Form.Label><b>{locals.Obras_Construccion_Fin}</b></Form.Label>
                <DatePicker
                    selected={editedProject.Obras_Construccion_Fin ? new Date(editedProject.Obras_Construccion_Fin) : null}
                    onChange={date => handleChangeFechas(date,'Obras_Construccion_Fin')}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    placeholderText="Seleccionar Fecha"
                    className="form-control"
                    timeZone="Europe/Madrid" 
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formVisadoFO_Enviado">
                <Form.Label><b>{locals.VisadoFO_Enviado}</b></Form.Label>
                <Form.Check
                  type="checkbox"
                  name="VisadoFO_Enviado"
                  checked={editedProject.VisadoFO_Enviado || false}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formVisadoFO_Descargado">
                <Form.Label><b>{locals.VisadoFO_Descargado}</b></Form.Label>
                <Form.Check
                  type="checkbox"
                  name="VisadoFO_Descargado"
                  checked={editedProject.VisadoFO_Descargado || false}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formFacturaFO">
                <Form.Label><b>{locals.FacturaFO}</b></Form.Label>
                <Form.Check
                  type="checkbox"
                  name="FacturaFO"
                  checked={editedProject.FacturaFO || false}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
            <Form.Select value={editedProject.Estado ? editedProject.Estado : "En curso"} name={locals.Estado} onChange={handleChange}>
              <option style={{backgroundColor: colors.enCurso}} value="En curso">En curso</option>
              <option style={{backgroundColor: colors.finalizado}} value="Finalizado">Finalizado</option>
            </Form.Select>
            </Col>
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
