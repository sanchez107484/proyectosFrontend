import Table from 'react-bootstrap/Table';
import locals from '../locals/locals';

const ExpandedComponent = ({ data }) => (
    <Table striped bordered hover>
        <tbody>
            <tr>
                <td align='center' rowSpan = {2}><p><b>{locals.CROQUIS}</b></p>{data.CROQUIS}</td>
                <td align='center'><p><b>{locals.Croquis_Inicio}</b></p>{new Date(data.Croquis_Inicio).toLocaleDateString('es-ES')}</td>
                <td align='center'><p><b>{locals.Croquis_Fin}</b></p>{new Date(data.Croquis_Fin).toLocaleDateString('es-ES')}</td>
                <td align='center'><p><b>{locals.Proyecto_Ejecucion_Inicio}</b></p>{new Date(data.Proyecto_Ejecucion_Inicio).toLocaleDateString('es-ES')}</td>
                <td align='center'><p><b>{locals.Proyecto_Ejecucion_Fin}</b></p>{new Date(data.Proyecto_Ejecucion_Fin).toLocaleDateString('es-ES')}</td>
                <td align='center'><p><b>{locals.Visado_Enviado}</b></p>{data.Visado_Enviado === "1" ? "SI" : "NO"}</td>
                <td align='center'><p><b>{locals.Visado_Descargado}</b></p>{data.Visado_Descargado === "1" ? "SI" : "NO"}</td>
                <td align='center'><p><b>{locals.Licencia}</b></p>{data.Licencia === "1" ? "SI" : "NO"}</td>
                <td align='center'><p><b>{locals.Factura}</b></p>{data.Factura === "1" ? "SI" : "NO"}</td>
            </tr>
            <tr>
                <td align='center'><p><b>{locals.Obras_Construccion_Inicio}</b></p>{new Date(data.Obras_Construccion_Inicio).toLocaleDateString('es-ES')}</td>
                <td align='center'><p><b>{locals.Obras_Construccion_Fin}</b></p>{new Date(data.Obras_Construccion_Fin).toLocaleDateString('es-ES')}</td>
                <td align='center' colSpan={2}></td>
                <td align='center'><p><b>{locals.VisadoFO_Enviado}</b></p>{data.VisadoFO_Enviado === "1" ? "SI" : "NO"}</td>
                <td align='center'><p><b>{locals.VisadoFO_Descargado}</b></p>{data.VisadoFO_Descargado === "1" ? "SI" : "NO"}</td>
                <td align='center'></td>
                <td align='center'><p><b>{locals.FacturaFO}</b></p>{data.FacturaFO === 1 ? "SI" : "NO"}</td>
            </tr>
        </tbody>
    </Table>
  );

  export default ExpandedComponent;