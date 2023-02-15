import Table from "./components/Table";
/* import Tables from "./layouts/tables"; */
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <div>
        <GlobalStyle />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Table />
            </div>
          </div>
        </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
