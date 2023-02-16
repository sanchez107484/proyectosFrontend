import Table from "./layouts/table/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import AddProjectForm from "./components/AddProyectForm";
import TableContainerStyles from "./styles/tableContainerStyles";
import { Container,Row, Col } from "react-bootstrap";


function App() {
  return (
    <ThemeProvider theme={{}}>
      <div>
        <GlobalStyle />
        <Container className="mt-4 mb-4 p-4 d-flex justify-content-center my-4">
          <TableContainerStyles className="px-4">
            <Row className="my-2">
              <Col className="px-2">
                <AddProjectForm />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="px-2">
                <Table />
              </Col>
            </Row>
          </TableContainerStyles>
        </Container>

    </div>
    </ThemeProvider>
  );
}

export default App;
