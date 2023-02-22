import Table from "./components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import AddProjectForm from "./components/AddProyectForm";
import { Container,Row, Col, Card } from "react-bootstrap";

function reloadPage() {
  window.location.reload();
}

function App() {
  return (
    <ThemeProvider theme={{}}>
      <div>
        <GlobalStyle />
        <Container className="mt-4 mb-4 p-4 d-flex justify-content-center my-4">
          <div>
            <h1 style={{textAlign: 'center'}}>LISTADO DE PROYECTOS</h1>
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
                <Table/>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>

    </div>
    </ThemeProvider>
  );
}

export default App;
