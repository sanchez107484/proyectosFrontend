import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import CustomSpinner from "../utils/CustomSpinner";
import customStyles from "../styles/CustomStyles";
import paginationComponentOptions from "../utils/paginationComponentOptions";
import { Form } from "react-bootstrap";
import proyectosServices from '../services/proyectosService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EditProyectoModal from './EditProyectoModal';


const Table = (props) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState({});
  
  const cargarProyectos = async () => {
    const fetchData = async () => {
      proyectosServices.getProyectos()
        .then((response) => {
          setData(response);      
        });
    };
    fetchData();
  }
  
  useEffect(() => {
    cargarProyectos();
  }, []);

  useEffect(() => {
		const timeout = setTimeout(() => {
      if (searchValue === ""){
        setFilteredData(data);
      }
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	});

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleFilter = (value) => {
    if (value !== "") {
      const filtered = data.filter((item) => {
        return Object.values(item).some((prop) => {
          if (prop !== null && prop !== undefined) {
            return prop.toString().toLowerCase().includes(value.toLowerCase());
          }
          return "";
        });
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleFilter(value);
  };
  
  const handleShowModal = (proyecto) => {
    setProyectoSeleccionado(proyecto);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setProyectoSeleccionado({});
    setShowModal(false);
  }

  const columns = [ 
    {
        name: 'Editar',
        cell: row => (      
          <div style={{ padding: "10px" }}>
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <FontAwesomeIcon icon={faEdit} size="lg" onClick={() => handleShowModal(row)}/>
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

  return (
      <div>
        <div style={{float: "right"}}>
          <span>Buscador:</span>
          <Form>
            <Form.Group>
              <Form.Control 
                type="text" 
                placeholder="Buscar" 
                className="form-control mb-3" 
                value={searchValue}
                onChange={handleSearch}
                onKeyUp={handleSearch}
                />
            </Form.Group>
          </Form>
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          progressPending={pending}
          progressComponent={<CustomSpinner />}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          striped={true}
          responsive={true}
          bordered={true}
          customStyles={customStyles}
          fixedHeader
          fixedHeaderScrollHeight="800px"
        /> 
        <EditProyectoModal project={proyectoSeleccionado} show={showModal} handleClose={handleCloseModal} handleSave={cargarProyectos}/>
      </div>

      
  );
  
};

export default Table;
