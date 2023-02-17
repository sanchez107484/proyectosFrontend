import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import CustomSpinner from "../utils/CustomSpinner";
import customStyles from "../styles/CustomStyles";
import paginationComponentOptions from "../utils/paginationComponentOptions";
import columns from "../layouts/table/data/columns";
import { Form } from "react-bootstrap";
import proyectosServices from '../services/proyectosService';


const Table = () => {
  const [data, setData] = useState([]);
  const [pending, setPending] = React.useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);

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
      </div>
  );
  
};

export default Table;
