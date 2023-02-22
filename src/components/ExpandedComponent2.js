import Table from 'react-bootstrap/Table';
import locals from '../locals/locals';

const ExpandedComponent = ({ data }) => (
    <Table striped bordered hover>
        <tbody>
            <tr>
                <td rowSpan = {6} align='center'><p><b>{locals.CROQUIS}</b></p>{data.CROQUIS}</td>
                <td colSpan = {2} align='center'><b>{locals.subheader.CROQUIS}</b></td>
                <td colSpan = {2} align='center'><b>{locals.subheader.Proyecto_Ejecucion}</b></td>
                <td colSpan = {2} align='center'><b>{locals.subheader.Visado}</b></td>
                <td rowSpan = {2} align='center'><b>{locals.Licencia}</b></td>
                <td rowSpan = {2} align='center'><b>{locals.Factura}</b></td>
            </tr>
            <tr>
                <td align='center'><b>{locals.subheader.Inicio}</b></td>
                <td align='center'><b>{locals.subheader.Fin}</b></td>
                <td align='center'><b>{locals.subheader.Inicio}</b></td>
                <td align='center'><b>{locals.subheader.Fin}</b></td>
                <td align='center'><b>{locals.subheader.Enviado}</b></td>
                <td align='center'><b>{locals.subheader.Descargado}</b></td>
            </tr>
            <tr>
                <td align='center'>{data.Croquis_Inicio}</td>
                <td align='center'>{data.Croquis_Fin}</td>
                <td align='center'>{data.Proyecto_Ejecucion_Inicio}</td>
                <td align='center'>{data.Proyecto_Ejecucion_Fin}</td>
                <td align='center'>{data.Visado_Enviado}</td>
                <td align='center'>{data.Visado_Descargado}</td>
                <td align='center'>{data.Licencia}</td>
                <td align='center'>{data.Factura}</td>
            </tr>

            <tr>
                <td colSpan = {2} align='center'><b>{locals.subheader.Obras_Construcción}</b></td>
                <td colSpan = {2} rowSpan={3} align='center'></td>
                <td colSpan = {2} align='center'><b>{locals.subheader.VisadoFO}</b></td>
                <td rowSpan = {3} align='center'></td>
                <td rowSpan = {2} align='center'><b>{locals.subheader.FacturaFO}</b></td>                
            </tr>
            <tr>
                <td align='center'><b>{locals.subheader.Inicio}</b></td>
                <td align='center'><b>{locals.subheader.Fin}</b></td>
                <td align='center'><b>{locals.subheader.Enviado}</b></td>
                <td align='center'><b>{locals.subheader.Descargado}</b></td>
            </tr>
            <tr>
                <td align='center'>{data.Obras_Construccion_Inicio}</td>
                <td align='center'>{data.Obras_Construccion_Fin}</td>
                <td align='center'>{data.VisadoFO_Enviado}</td>
                <td align='center'>{data.VisadoFO_Descargado}</td>
                <td align='center'>{data.FacturaFO}</td>
            </tr>
        </tbody>
    </Table>
  );

  export default ExpandedComponent;