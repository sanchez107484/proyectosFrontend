import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditProyectoModal from '../../../components/EditProyectoModal';
import React, { useState } from 'react';

function Modal(){

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  return (
    <EditProyectoModal 
        project={null} 
        show={showModal} 
        handleClose={handleCloseModal} 
        handleSave={null}/>
  );

}
const columns = [ 
  {
      name: 'Editar',
      cell: row => (      
        <div style={{ padding: "10px" }}>
          <div style={{ display: "inline-block", marginRight: "10px" }}>
            <FontAwesomeIcon icon={faEdit} size="lg" onClick={Modal}/>
          </div>
        </div>
      ),
      ignoreRowClick: true,
    },
    {
      name: 'CROQUIS',
      selector: row => row['CROQUIS'],
      sortable: true,
      wrap: true,
      width: "1/12",
    },
    {
      name: 'PROYECTOS',
      selector: row => row['PROYECTOS'],
      sortable: true,
      wrap: true,
      width: "1/12",
    },
    {
      name: 'TRABAJO',
      selector: row => row['TRABAJO'],
      sortable: true,
      wrap: true,
      width: "3/12",
    },
    {
      name: 'MOTE',
      selector: row => row['Mote'],
      sortable: true,
      wrap: true,
      width: "1/12",
    },
    {
      name: 'PROMOTOR',
      selector: row => row['Promotor'],
      sortable: true,
      wrap: true,
      width: "2/12",
    },
    {
      name: 'SITUACION',
      selector: row => row['Situacion'],
      sortable: true,
      wrap: true,
      width: "2/12",
    },
    {
      name: 'LOCALIDAD',
      selector: row => row['Localidad'],
      sortable: true,
      wrap: true,
      width: "1/12",
    },
    {
      name: 'TELEFONO',
      selector: row => row['Telefono'],
      sortable: true,
      wrap: true,
      width: "1/12",
    },
    
  ];


export default columns;