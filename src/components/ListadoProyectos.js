import React from "react";
import Table from "./Table";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import AddProjectForm from "./AddProyectForm";
import { Container,Row, Col, Card } from "react-bootstrap";
import locals from "../locals/locals";

function reloadPage() {
  window.location.reload();
}

const ListadoProyectos = (props) => {
  
  return (
    <ThemeProvider theme={{}}>
      <div>
        <GlobalStyle />
        <Container className="mt-4 mb-4 p-4 d-flex justify-content-center my-4">
          <div>
            <h1 style={{textAlign: 'center'}}>{locals.TITULO_PAGINA}</h1>
            <span onClick={props.onLogout}>{locals.CerrarSesion}</span>
            <Row className="my-2">
              <Col className="px-2">
                <Card bg="white" text="dark" style={{ borderRadius: '10px', padding: '10px' }}>
                  <AddProjectForm reloadPage={reloadPage}/>
                </Card>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="px-2">
                <Card bg="none" text="dark" style={{ borderRadius: '10px', padding: '10px' }}>
                  <Table />
                </Card>
              </Col>
            </Row>
          </div>
        </Container>

    </div>
    </ThemeProvider>
  );
}

export default ListadoProyectos;
